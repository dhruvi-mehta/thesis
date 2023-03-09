<?php
if(isset($_POST['video-feedback'])) {
  $feedback = $_POST['video-feedback'];
  $video_id = $_POST['video-id'];
  $date = date('Y-m-d H:i:s');
  $ip = $_SERVER['REMOTE_ADDR'];
  
  // write data to file
  $file = fopen('feedback.txt', 'a');
  fwrite($file, "$date | $ip | $video_id | $feedback\n");
  fclose($file);
  
  echo "Thank you for your feedback!";
}
?>
