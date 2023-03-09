      <?php
      if(isset($_POST['video-feedback'])) {
          $data = $_POST['video-feedback'];
          $filename = feedback.txt";
          $ret = file_put_contents($filename, $data, FILE_APPEND | LOCK_EX);
          if($ret === false) {
              die('There was an error writing this file');
          }
          else {
              echo "$ret";
          }
      }
      else {
         die('no post data to process');
      }
      ?>



<!-- <?php

Welcome <?php echo $_POST["video-feedback"]; 

$file = fopen('feedback.txt', 'a');
  fwrite($file, "$date | $ip | $video_id | $feedback\n");
  fclose($file);
  
  echo "Thank you for your feedback!";
}


?>
 -->