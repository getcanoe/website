<?php
$recipient="raiw@krampe.se";
$subject="Canoe interest";
$senderEmail=$_POST["senderEmail"];
$mailBody="Email: $senderEmail\n\n";

mail($recipient, $subject, $mailBody, "From: <$senderEmail>");
header("Location: https://getcanoe.io/thanks.html");
die();
?>
