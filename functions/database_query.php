<?php
require 'bow_processing.php';
require 'database_functions.php';

$phrase = $_POST['word'];
$word_array = explode(" ",$phrase);
//echo $word_array[0];
//echo $word_array[3];
$result = db_query($word_array);
echo $result;

function db_query($word_list) {
  $mysqli = databaseConnect();

  $p_d_output = parseDriver($word_list); //potentially

  
  if ($p_d_output == "No matches"){
	return "Sorry, I didn't understand your question, please try asking again differently or with more information";  
  }
  
  //return strval(p_d_output[0]);
  
  $primary_key = $p_d_output[0];
  $table = $p_d_output[1];

  if ($table === "") {
      return("-1");
  }
  
  if ($table == "definitions"){
	  if (!($stmt = $mysqli->prepare("SELECT DEFINITION FROM DEFINITIONS WHERE table_key = ?"))) {
		die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
	  }
	  
	  $stmt->bind_param("s", $primary_key );
	  if (!$stmt->execute()) {
		die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
	  }

	  $fetched_data=null;
	  if (!$stmt->bind_result($fetched_data)) {
		die ("Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error);
	  }
	  if ($stmt->fetch()) {
		return($fetched_data);
	  }
	  else {
		  die ("No data found in definitions");
	  }
  } elseif ($table == "symbols"){
	  if (!($stmt = $mysqli->prepare("SELECT MEANING FROM SYMBOLS WHERE table_key = ?"))) {
		die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
	  }
	  
	  $stmt->bind_param("s", $primary_key );
	  if (!$stmt->execute()) {
		die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
	  }

	  $fetched_data=null;
	  if (!$stmt->bind_result($fetched_data)) {
		die ("Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error);
	  }
	  if ($stmt->fetch()) {
		return($fetched_data);
	  }
	  else {
		  die ("No data found in symbols");
	  }
  } elseif ($table == "functions"){
	  if (!($stmt = $mysqli->prepare("SELECT DESCRIPTION,LINK,FPICTURE,FTOPIC FROM FUNCTIONS WHERE table_key = ?"))) {
		die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
	  }
	  
	  $stmt->bind_param("s", $primary_key );
	  if (!$stmt->execute()) {
		die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
	  }

	  $desc=null;
	  $link=null;
	  $fpic=null;
	  $ftop=null;
	  if (!$stmt->bind_result($desc, $link, $fpic, $ftop)) {
		die ("Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error);
	  }
	  if ($stmt->fetch()) {
		return($desc." ".$link." ".$fpic." ".$ftop);
	  }
	  else {
		  die ("No data found in functions");
	  }
  }
  return "hello";
}

?>