<?php
$htmlBody = "4
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Thank you for sending mail</title>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Raleway:400,600,900');

*{
  box-sizing:border-box;
 /* outline:1px solid ;*/
}
body{
        background: #195550;
        height: 100%;
        margin: 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
  
}
a {
  color: #fff;
  text-decoration: none;
  transition: all 0.30s linear 0s;
}

.wrapper-1{
  width:100%;
  height:100vh;
  display: flex;
flex-direction: column;
}
.wrapper-2{
  padding: 30px;
  text-align:center;
}
h1{
  font-family: 'Raleway', Arial Black, Sans-Serif;
  font-size:4em;
  font-weight: 900;
  letter-spacing:3px;
  color: #fafafa;
  margin:0;
  margin-top: 40px;
  margin-bottom:40px;
}
.wrapper-2 p{
  margin:0;
  font-size:1.3em;
  color:#fafafa;
  font-family: 'Raleway', sans-serif;
  letter-spacing:1px;
  line-height: 1.5;
}
.go-home{
  background: #e83890;
  border:none;
  padding: 25px 30px;
  margin: 30px 0;
  border-radius: 5px;
  cursor: pointer;
}
.go-home:hover{
  opacity: 0.9;
}
.go-home a{
  font-family: 'Raleway', Arial Black;
  font-size: 1rem;
  font-weight: 700!important;
  text-transform: uppercase;
  letter-spacing: 2px;
  
}
.footer-like{
  margin-top: auto; 
  background: rgb(31,38,130);
  padding:6px;
  text-align:center;
}
.footer-like p{
  margin:0;
  padding:4px;
  color:#fafafa;
  font-family: 'Raleway', sans-serif;
  letter-spacing:1px;
}
.footer-like p a{
  text-decoration:none;
  color:#5892FF;
  font-weight: 600;
}

.footer-like p a:hover{
  color:#FFF;
 }

@media (min-width:360px){
  h1{
    font-size:4.5em;
  }
  .go-home{
    margin-bottom:20px;
  }
}

@media (min-width:600px){
  .thankyoucontent{
  max-width:1000px;
  margin:0 auto;
}
  .wrapper-1{
  height: initial;
  max-width:620px;
  margin:0 auto;
  margin-top:50px;
  }
  
  
}
    </style>
</head>
   <body>
    <div class=thankyoucontent>
        <div class='wrapper-1'>
           <div class='wrapper-2'>
              <img src='https://i.ibb.co/Lkn7rkG/thank-you-envelope.png' alt='thank-you-envelope' border='0'>
            <h1>Thank you!</h1>
             <p>for contacting us, we will reply promptly</p> 
             <p>once your message is received. </p>
             <button class='go-home'><a href='https://mimsnorthdale-official.com'>
               home page</a>
             </button>
           </div>
          
           <div class='footer-like'>
             <p>
             </p>
           </div>
       </div>       
   </body>
</html>";
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

$servername = "localhost";
$dbusername = "mimsqcaq_northdale-website";
$password = "GJwy2jFlmcmd";
$dbname = "mimsqcaq_customers";


$username =  $_GET["fullname"]  ;
$phoneNumber =  $_GET["phoneNumber"] ;
$userEmail =  $_GET["email"] ;
$userComment =  $_GET["comment"] ;
// Create connection
$conn = new mysqli($servername,
	$dbusername, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: "
		. $conn->connect_error);
}

$sqlquery = "INSERT INTO Customers (firstName , Phonenumber ,email , comment)
VALUES (
    '$username','$phoneNumber','$userEmail','$userComment'
);" ;

 if ($conn->query($sqlquery) === TRUE) {
	echo $htmlBody;
} else {
	echo "Error: " . $sqlquery . "<br>" . $conn->error;
}


sendMailToUser($userEmail,$username);

  function sendMailToUser($recievermail,$username){

  $to = $recievermail;
  $subject = "Your House is here where are you";

  $message = "
  <html>

  <h3>Hello $username ,</h3>
  <br>
  <p>
  Thanks for your interest in the property MIMS Norhtdale Villa. It's a pleasure meeting you. you can download a brochure from here.
  <center>
  <a href='https://mimsnorthdale-official.com/Brochure.pdf'>
  <button background='green' height ='80' width ='200' color='white'>
  Download Brochure
  </button>
  </a>
  </center>

  </p>
  <br>
  Regards,
  MIMS Northdale Team
  </html>
  ";

  // Always set content-type when sending HTML email
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  // More headers
  $headers .= 'From: info@mimsnorthdale-official.com' . "\r\n";
  $headers .= 'Cc: no-reply@mimsnorthdale-official.com' . "\r\n";

  mail($to,$subject,$message,$headers);
  }
?>