<?php
require 'functions/form_generation.php';
require 'functions/form_processing.php';
require 'functions/webpage_generation.php';
require 'functions/database_functions.php';

session_start();
if (isset($_SESSION['admin'])) {
	$title = 'Excelsior - Admin Control Panel';
	echo createHeader($title);
    echo createAdminUtilites();
	if ($_GET['response_type'] == "good"){
		echo displayControlPanel('GOOD_RESPONSES');
	} else {
		echo displayControlPanel('BAD_RESPONSES');
	}
	echo createFooter($title);
}
else {
  header("location: /~perm_team7_2016/excelsior/login.php");
}
?>