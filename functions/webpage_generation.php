<?php
/**
 * Contains methods for generating important webpage elements.
 */

/**
 * Generates the beginning part of an HTML document
 *
 * @param the title of the webpage
 * @return The beginning part of an HTML document
 */
function createHeader($title)
{
    return '
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>' . $title . '</title>
    <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="stylesheet.css" rel="stylesheet"/>
  </head>
  <body>
    <script type="text/javascript" src="createNav.js"></script>
	<br><br><br><br>
    <div class="container">
    	<h1>' . $title . '</h1>';
}

function createAdminUtilites()
{
    return '
	<a href="manuals/operatorManual.html">Operator Manual</a> <br>
    <a href="http://oraserv.cs.siena.edu/phpmyadmin/">PhpMyAdmin</a> <br>
    <a href="addToBow.html">Append to Bag of Words</a> <br><br>
    </script>
    ';
}

/**
 * Generates the generic footer of an HTML document
 *
 * @param The title of the webpage
 * @return The generic footer of an HTML document
 */
function createFooter($title)
{
    $year = date('Y');
    return '
    </div><!-- /.container -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </body>
  </html>';
}

/**
 * Generates an HTML control panel for making changes to the database
 *
 * @param string table The table to be put into HTML
 * @return The HTML control panel for the corresponding table
 */
function displayControlPanel($table)
{

    $mysqli = databaseConnect();

    $query = "SELECT * FROM " . $table;
    $result = $mysqli->query($query);
    $finfo = $result->fetch_fields();

    $output = '<p>Logged in as <strong>' . $_SESSION['userid'] . '</strong>.</p>';
    $output .= '<p>Currently viewing <strong>' . $table . '</strong>.</p>';
    $output .= '<p>
	<div class="btn-group">';

    if ($table == "GOOD_RESPONSES") {
        $output .= '<a class="btn btn-danger" href="admin.php?response_type=bad">Bad Responses</a>';
    } elseif ($table == "BAD_RESPONSES") {
        $output .= '<a class="btn btn-success" href="admin.php?response_type=good">Good Responses</a>';
    }
    $output .= '<a class="btn btn-warning" href="logout.php">Logout</a>
	</div>
	</p>
	<p>';

    $output .= '<div class="table-responsive">';
    $output .= '<table class="table table-bordered">';
    $output .= '<thead><tr>';
    $output .= '<th>Controls</th>';
    foreach ($finfo as $field) {
        $output .= '<th>' . $field->name . '</th>';
    }
    $output .= '</tr></thead><tbody>';
    while ($row = $result->fetch_row()) {
        $output .= '<tr>';
        $output .= '<td>';
        if ($_SESSION['admin'] > 0) {
            $output .= '<a href="deleteResponse.php?id=' . $row[0] . '&table=' . $table . '" class="btn btn-primary">Dismiss</a>';
        }
        foreach ($row as $val) {
            $output .= '<td>' . $val . '</td>';
        }
        $output .= '</tr>';
    }
    $output .= '</tbody></table></div>';

    $result->free();
    $mysqli->close();
    return $output;
}

?>