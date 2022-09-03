<?php

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";


$username =  $_GET["name"];
$phoneNumber =  $_GET["phonenumber"];
$userEmail =  $_GET["email"];
$userComment =  $_GET["comment"];
// Create connection
$conn = new mysqli($servername,
	$username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: "
		. $conn->connect_error);
}

$sqlquery = "INSERT INTO Customers (FullName , Phonenumber ,email , comment)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');"

if ($conn->query($sql) === TRUE) {
	echo "record inserted successfully";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}


?>