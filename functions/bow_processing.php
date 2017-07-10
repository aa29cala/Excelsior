<?php
$definitions = array(
    array("argument"),
    array("flag"),
    array("gross pay amount", "gross", "pai", "amount"),
    array("net pay", "net", "pai"),
    array("state tax", "state"),
    array("tax"),
    array("absolute cell", "absolut"),
    array("active cell", "activ"),
    array("active sheet", "activ", "sheet"),
    array("address"),
    array("array", "arrai"),
    array("ascending sort", "ascending", "sort"),
    array("axis", "axi"),
    array("bar chart", "bar", "chart"),
    array("cell"),
    array("cell reference", "cell refer", "refer"),
    array("change history", "change", "histori"),
    array("comment"),
    array("constant"),
    array("copy area", "copi", "area"),
    array("criteria", "critera"),
    array("data form", "data", "form"),
    array("data series", "data", "seri"),
    array("data validation", "data", "valid"),
    array("database", "databas"),
    array("dependents", "depend"),
    array("descending sort", "descending", "sort", "descendin", "descendi", "descend", "descen"),
    array("destination area", "destin", "area"),
    array("embedded chart", "embed", "chart", "inner"),
    array("excel table", "excel", "tabl"),
    array("expression", "express"),
    array("external data", "extern", "data"),
    array("federal tax", "feder", "tax"),
    array("font"),
    array("formula bar", "formula", "bar"),
    array("hyperlink"),
    array("iteration", "iter"),
    array("join"),
    array("line graph", "line", "graph"),
    array("matrix"),
    array("merge", "merg"),
    array("name box", "name", "box"),
    array("net pay", "net", "pai"),
    array("operand"),
    array("outer join", "outer", "join"),
    array("page break", "page", "break"),
    array("parameter", "paramet"),
    array("password"),
    array("paste area", "past", "area"),
    array("pie chart", "pie", "chart"),
    array("point"),
    array("primary key", "primari", "kei"),
    array("read only", "read", "onli"),
    array("row"),
    array("spreadsheet"),
    array("sql"),
    array("template", "templat"),
    array("total"),
    array("trendline", "trendlin"),
    array("truncated", "truncat","incomplete","pound"),
    array("value", "valu"),
    array("worksheet"),
    array("xml"),
);
$functions = array(
    array("add new column", "new", "column"),
    array("adjust table color style","adjust", "tabl", "color", "style"),
    array("average", "averag()", "averag", "avg"),
    array("change row height", "chang", "height"),
    array("chart creation", "chart","creation"),
    array("conditional formatting", "condit", "format"),
    array("connection between file and sheet", "connect", "between", "file", "sheet"),
    array("count", "amount", "function"),
    array("dark border", "border", "thick"),
    array("filter", "hidden"),
    array("format table comma separator", "format", "tabl", "comma", "separ"),
    array("format without decimals and $","format", "without", "decim", "$"),
    array("fv", "futur", "value"),
    array("get data from another window sheet","get", "data", "from", "anoth", "window", "sheet"),
    array("how much of the year has passed","much", "year"),
    array("if statement", "statement", "if"),
    array("len", "length", "function"),
    array("macro"),
    array("max", "max", "maximum", "highest"),
    array("min", "min", "minimum", "lowest"),
    array("mm/dd/yy", "date", "format", "mm", "month"),
    array("named range", "name", "range"),
    array("overtime function", "overtim", "function", "ot"),
    array("pivot"),
    array("pmt", "pmt", "fx", "label", "payment"),
    array("put work in another window","put", "work", "anoth", "window"),
    array("remove duplicates","remov", "duplic"),
    array("report named range", "report", "name", "rang"),
    array("Select a cell", "select", "data"),
    array("Select a row","select", "list"),
    array("Subtotal tool","subtot", "tool"),
    array("SUM", "sum"),
    array("TODAY","todai", "date"),
    array("Variable data tables", "variabl", "data", "tabl"),
    array("VLOOKUP","vlookup")
);

function checkSim($wordsToSearch, $table)
{
	#2d array for the returning of similiarity of a query and the index it appears at
	$sim_index = array(
		#[0 = index in bow, 1 = similiarity count]
	);
	#length of wordsToSearch
	$wtsLen = count($wordsToSearch);
	#length of table being searched
	$tLen = count($table);
	#examines each array in the table bow, if one of the query terms matches an element in #the bow the similiarty count for that index is incremented and noted within sim_index
	for($r = 0; $r < $wtsLen; $r++){
		for($t = 0; $t < $tLen; $t++){
			$sLength = count($table[$t]);
			if (array_key_exists($t,$sim_index) == false) {
				array_push($sim_index, array($t,0));
			}
			for($s = 0; $s < $sLength; $s++){
				if($table[$t][$s] == $wordsToSearch[$r]){
					$indexInt = $sim_index[$t];
					$indexInt[1]++;
					$sim_index[$t] = $indexInt;
				}
			}
		}
	}
	#length of sim_index array
	$sim_index_len = count($sim_index);
	
	$greatest_sim = 0;
	#index num of sim_index with greatest sim
	$great_sim_index = 0;
	for($r = 0; $r < $sim_index_len; $r ++){
		$simInd = $sim_index[$r];
		$sim = $simInd[1];
		if($sim > $greatest_sim){
			$greatest_sim = $sim;
			$great_sim_index = $r;
		}
	}
	return $sim_index[$great_sim_index];
}
#compares user input against contents of bow, highest similarity is used
function parseDriver($wordsToSearch)
{
    global $definitions, $functions;
    $ret_def = checkSim($wordsToSearch, $definitions);
    $ret_func = checkSim($wordsToSearch, $functions);
    
	if ($ret_def[1]==0 && $ret_func[1]==0 && $ret_sym[1]==0) {
		return "No matches";
	}
	
    $h = max($ret_def[1], $ret_func[1]);
    #if the sim count of the max sim of any of the tables is the greatest, return the pk in #the bow
    if($ret_func[1] == $h){
		return array($functions[$ret_func[0]][0],"functions");
    }else{
		return array($definitions[$ret_def[0]][0],"definitions");
	}
}


?>
