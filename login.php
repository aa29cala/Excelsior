<?php
/**
* Uses php functions to create and process the login form.
*/

require 'functions/form_generation.php';
require 'functions/form_processing.php';
require 'functions/webpage_generation.php';
require 'functions/database_functions.php';

$title = 'Excelsior Login';

echo createHeader($title);

if ($_GET['action']=="submit") {
  echo processLoginForm();
}
else {
  echo createLoginForm();
}
echo createFooter($title);
	

?>