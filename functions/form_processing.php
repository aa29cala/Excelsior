<?php
/**
* Contains php functions for processing form information.
*/


/**
* Checks if all fields from login form are filled and then redirects based on contents
*
* @return The login form with missing fields highlighted
*/
function processLoginForm() {
	$fieldMissing = false;
	foreach ($_POST as $key => $value) {
		$value = strval($value);
		if ($value == "")  {
			$_POST[$key] = "!missing!";
			$fieldMissing = true;
    }
  }
  if ($fieldMissing) {
    return createLoginForm();
  }
  else {
    if (checkPassword()) {
		session_start();
		$_SESSION['userid'] = $_POST['userid'];
		$_SESSION['admin'] = 1;
		header("location: /~perm_team7_2016/excelsior/admin.php");
	} else {
		echo 'Wrong password';
		return createLoginForm();
	}
  }
}

?>