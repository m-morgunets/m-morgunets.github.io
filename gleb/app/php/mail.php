<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $mail = $_POST['mail'];

  // $subject = "=?utf-8?B?".base_encode("Номер телефона оставленный на сайте")."?=";
  $headers = "From: $name\r\nReplyto: $name\r\nContent-type: text/html; charset=utf-8\r\n";

  $success = mail("mik.msk@internet.ru", "Заявка с сайта", "Имя: ".$name."<br>Телефон: ".$phone."<br>Почта: ".$mail, $headers);
  echo $success;
?>