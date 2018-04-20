<?php
$recipient="goran.krampe@gmail.com";
$subject="Canoe signup";
$senderEmail=$_POST["senderEmail"];
$mailBody="Email: $senderEmail\n\n";

file_put_contents("/home/gokr/signups.txt", "$senderEmail\n", FILE_APPEND | LOCK_EX);

header("Location: https://getcanoe.io/signup/thanks.html");
die();
?>

