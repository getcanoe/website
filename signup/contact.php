<?php
$recipient="goran.krampe@gmail.com";
$subject="Canoe signup";
$senderEmail=$_POST["senderEmail"];
$mailBody="Email: $senderEmail\n\n";

mail($recipient, $subject, $mailBody, "From: <$senderEmail>");
header("Location: https://getcanoe.io/signup/thanks.html");
die();
?>
