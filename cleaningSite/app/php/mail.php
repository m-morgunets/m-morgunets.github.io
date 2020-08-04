<?php
  $name = $_POST['name'];
  $phone = $_POST['phone'];

  // $subject = "=?utf-8?B?".base_encode("Номер телефона оставленный на сайте")."?=";
  $headers = "From: $name\r\nReplyto: $name\r\nContent-type: text/html; charset=utf-8\r\n";

  $success = mail("miha123770214@gmail.com", "Заявка с сайта", "Имя: ".$name."<br>Телефон: ".$phone, $headers);
  echo $success;
?>