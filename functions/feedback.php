<?php

require 'database_functions.php';

$type = $_POST['type'];
$uuid = $_POST['uuid'];
$comment = $_POST['comment'];
$userQuery = $_POST['userQuery'];
$excelsiorResponse = $_POST['excelsiorResponse'];
//echo 'Thanks for the feedback!';
//echo $type.$uuid.$comment.$userQuery.$excelsiorResponse."Thanks for the Feedback!";

$mysqli = databaseConnect();

if ($comment == ""){
	echo "Thanks for the feedback!";
} else {
	if ($type == "false") {
		if (!($stmt = $mysqli->prepare("INSERT INTO BAD_RESPONSES VALUES (?,?,?,?)"))) {
			die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
		}
		
		$stmt->bind_param("ssss",
			$uuid,
			$comment,
			$userQuery,
			$excelsiorResponse
		);
		
		if (!$stmt->execute()) {
			die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
		}
		$stmt->close();
		$mysqli->close();
		echo 'Thanks for the feedback!';
	}
	elseif ($type == "true") {
		if (!($stmt = $mysqli->prepare("INSERT INTO GOOD_RESPONSES VALUES (?,?,?,?)"))) {
			die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
		}
		
		$stmt->bind_param("ssss",
			$uuid,
			$comment,
			$userQuery,
			$excelsiorResponse
		);
		
		if (!$stmt->execute()) {
			die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
		}
		$stmt->close();
		$mysqli->close();
		echo 'Thanks for the feedback!';
	}
}

?>