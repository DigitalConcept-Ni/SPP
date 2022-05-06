<?php
$destino="superparty07@gmail.com";
$fullname= $_POST['fullName'];
$phonenumber= $_POST['phonenumber'];
$email= $_POST['email'];
$date= $_POST['date'];
$message= $_POST['message'];
$contenido= 'Name: ' . $fullname . '\nPhone_Numbre: ' . $phonenumber . '\nEmail: ' . $email . '\ndate for contact: ' . $reason . '\nMessage: ' . $message;
mail($destino, "Contacto", $contenido);
header("Location:index.html")
?>