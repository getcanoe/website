<?php
header("Access-Control-Allow-Origin: *");

$recipient="raiw@krampe.se";
$subject="Canoe feedback";
$email=$_POST["Email"];
$feedback=$_POST["Feedback"];
$score=$_POST["Score"];
$version=$_POST["AppVersion"];
$platform=$_POST["Platform"];
$deviceVersion=$_POST["DeviceVersion"];
$mailBody="Email: $email\nFeedback: $feedback\nScore: $score\nVersion: $version\nPlatform: $platform\nDeviceVersion: $deviceVersion\n\n";

mail($recipient, $subject, $mailBody, "From: <$email>");
?>
