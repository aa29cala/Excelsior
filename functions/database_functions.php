<?php
/**
* Contains functions used for connecting to and querying the database.
*/

/**
* Opens a connection to the Team7 oraserv database and returns the corresponding mysqli object.
*
* @return the mysqli connection object
*/
function databaseConnect() {
	$mysqli = new mysqli("oraserv.cs.siena.edu", "perm_team7_2016", "cidAijva", "perm_team7_2016");
	if ($mysqli->connect_errno) {
		die("Database connection failed");
	}
	else {
		return $mysqli;
	}
}	

/**
* Queries the database with the posted userid to see if the submitted password is a match
*
* @return whether the password is a match
*/
function checkPassword() {
  $mysqli = databaseConnect();
  $submitted_passwd = hash('sha256', $_POST['passwd']);
  $submitted_userid = $_POST['userid'];
  if (!($stmt = $mysqli->prepare("SELECT PASSWORD FROM CREDENTIALS WHERE username=?"))) {
	echo "hello";
    die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
  }
  $stmt->bind_param("s", $submitted_userid );
  if (!$stmt->execute()) {
    die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
  }
  $stored_passwd = null;
  if (!$stmt->bind_result($stored_passwd)) {
    echo "Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error;
  }
  if ($stmt->fetch()) {
    if ($stored_passwd == $submitted_passwd)
      return true;
    else
      return false;
  }
}

function deleteResponse($id, $table) {
	$mysqli = databaseConnect();
  if (!($stmt = $mysqli->prepare("DELETE FROM ".$table." WHERE ID=?"))) {
    die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
  }
  $stmt->bind_param("s", $id );
  if (!$stmt->execute()) {
    die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
  }
}

?>