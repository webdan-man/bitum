﻿<?php
$phone = $_POST['phone'];
$name = $_POST['name'];

$subject = 'from:дорснаб-резерв.рф';	

//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$message = "Здравствуйте, $name! Ваша заявка принята! Через 3 минуты Вам позвонит сотрудник ООО «ДорСнаб-Резерв», ожидайте…";

$to = "4CE04F45-24BF-05BB-B31F-AC20C3984D58".$phone."@sms.ru";

if (isset($_POST['phone'])){
mail ($to,$subject,$message,$headers);
}
?>