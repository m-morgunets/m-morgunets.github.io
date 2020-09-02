<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$token = "1164459804:AAGqrIccR2yLoeF0VDuNJJzZ3npN_dZN7IE";
$chat_id = "-493027172";

$arr = array(
  "Имя: " => $name,
  "Телефон: " => '+'.$phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

echo $sendToTelegram;

?>