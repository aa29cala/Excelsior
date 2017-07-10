<?
/**
* Links to all other general php function files.
*/

session_start();
date_default_timezone_set('America/New_York');
/* --------------------  Database functions --------------------  */
require 'database_functions.php';
/* --------------------  Web page generation functions --------------------  */ 
require 'webpage_generation.php';
/* --------------------  Form generation functions --------------------  */
require 'form_generation.php';
/* --------------------  Form processing functions --------------------  */
require 'form_processing.php';
?>