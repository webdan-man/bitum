$(document).ready(function() {
    $('<link href="css/libs.min.css" rel="stylesheet"><link href="css/style.css" rel="stylesheet">').appendTo('head');

	
    $('.fancy').fancybox({helpers : { overlay : { locked : false } }});

	$('.pop-btn').click(function(e){
		e.preventDefault();
		$($(this).data('pop')).arcticmodal();
	});

	$('input[name="phone"]').mask('+7 (999) 999-99-99');
	$('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
	$('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

	function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){$('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
    $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
    $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

    $('form').submit(function(e){
        e.preventDefault();
        $phone = $(this).find('input[name="phone"]').val();
        var ya_event=$(this).find('input[name="event"]').val();
        $(this).find('input[type="text"]').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();night();yaCounter36561660.reachGoal(ya_event);
            }
        }); 
        }
    });
function night(){
    var tm=new Date(Date.now()+10800000);
    tm_hours = tm.getUTCHours();
    tm_minutes = tm.getUTCMinutes();
    tm_day = tm.getUTCDay();
    tm_full = tm_minutes + tm_hours*60;
    var phone_unmask = $phone.replace(' ','').replace('(','').replace(')','').replace('-','').replace('-','').replace(' ','');
    if (tm_full < 600 || tm_full > 1020 || tm_day == 0) {
        $.ajax({
            type: "post",
            url: 'ajax/mail2.php',
            data: {
                phone: phone_unmask
            }
        }); 
    }else if (tm_full > 960 && tm_day == 6) {
        $.ajax({
            type: "post",
            url: 'ajax/mail2.php',
            data: {
                phone: phone_unmask,
                name: form_name
            }
        }); 
    }else{
        $.ajax({
            type: "post",
            url: 'ajax/mail3.php',
            data: {
                phone: phone_unmask,
                name: form_name
            }
        }); 
        
    }
}
});