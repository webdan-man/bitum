<?php
$phone = $_POST['phone'];
$name = $_POST['name'];

$vowels = array("-", "(", ")"," ");
$phone = str_replace($vowels, "", $phone);

$subject = 'from:дорснаб-резерв.рф';	

//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$message = "Здравствуйте, $name! Ваша заявка принята! В ближайшее рабочее время Вам позвонит сотрудник ООО «ДорСнаб-Резерв». Спасибо за обращение!";

$to = "4CE04F45-24BF-05BB-B31F-AC20C3984D58".$phone."@sms.ru";

if (isset($_POST['phone'])){
mail ($to,$subject,$message,$headers);
}
?>