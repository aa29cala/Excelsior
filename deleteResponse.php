<?php
require 'functions/database_functions.php';
deleteResponse($_GET['id'],$_GET['table']);
if ($_GET['table'] == "GOOD_RESPONSES") {
	header("location: /~perm_team7_2016/excelsior/admin.php?response_type=good");
} else {
	header("location: /~perm_team7_2016/excelsior/admin.php?response_type=bad");
}
?>