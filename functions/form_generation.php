<?php
/**
* Contains methods for generating HTML form elements.
*/

/**
* Creates an html text input tag
*
* @param string id The id attribute of the input tag
* @param string label The label tag as well as placeholder attribute of the input tag
* @param string size The bootstrap column size of the text field
* @return The html elements to be put on the page
*/
function createTextField($id, $label, $size) {
  $value = $_POST[$id];
  if ($value == "!missing!") {
    $value = null;
  }
  $errorClass = null;
  $errorSpan = null;
  if ($_POST[$id] == "!missing!") {
   $errorClass = " has-error";
   $errorSpan = '<span class="help-block">'.$label.' must be entered.</span>';
  }	
  return '
   <div class="col-sm-'.$size.'">	
   <div class="form-group'.$errorClass.'">
     <label class="control-label" for="'.$id.'">'.$label.'</label>
     <input type="text" class="form-control" id="'.$id.'" name="'.$id.'" placeholder="'.$label.'" value="'.$value.'">'.
	 $errorSpan.'
   </div>
   </div>';	

}	

/**
* Creates an html password input tag
*
* @param string id The id attribute of the input tag
* @param string label The label tag as well as placeholder attribute of the input tag
* @param string size The bootstrap column size of the text field
* @return The html elements to be put on the page
*/
function createPasswordField($id, $label, $size) {
  $value = $_POST[$id];
  if ($value == "!missing!") {
    $value = null;
  }
  $errorClass = null;
  $errorSpan = null;
  if ($_POST[$id] == "!missing!") {
   $errorClass = " has-error";
   $errorSpan = '<span class="help-block">'.$label.' must be entered.</span>';
  }	
  return '
   <div class="col-sm-'.$size.'">	
   <div class="form-group'.$errorClass.'">
     <label class="control-label" for="'.$id.'">'.$label.'</label>
     <input type="password" class="form-control" id="'.$id.'" name="'.$id.'" placeholder="'.$label.'" value="'.$value.'">'.
	 $errorSpan.'
   </div>
   </div>';	
}	

/**
* Creates a login form with a userame field and password field
*
* @return A HTML form for a login
*/
function createLoginForm() {
	return '
   <form method="post" action="login.php?action=submit">
   <h2>Admin Info</h2>
   <div class="row">'.		
   createTextField("userid", "Login", 6).
   createPasswordField("passwd", "Password", 6).
   '</div>
   <button type="submit" class="btn btn-success">Submit</button>
	</form>';
}

?>