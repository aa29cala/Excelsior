/* generate the user manual. WIP until the end of the year*/
createNav();

var body = document.querySelector("body");


/* title */
var titleDiv = document.createElement("div");
titleDiv.setAttribute("class", "div_title");
titleDiv.style.marginTop = '60px';
var title = document.createElement("h1");
title.innerHTML = "Excelsior User Guide";
body.appendChild(titleDiv).appendChild(title);
/* end title */

/* date and iteration no */
var date = document.createElement("h1");
date.setAttribute("style", "font-size: 2.5rem;");
date.innerHTML = "Updated April 2017";
var version = document.createElement("h1");
version.setAttribute("style", "font-size: 2.5rem;");
version.innerHTML = "Version 0.02";
titleDiv.appendChild(date);
titleDiv.appendChild(version);
/* end date and iteration no */


/* table of contents */
var tableOfContentsDiv = document.createElement("div");
tableOfContentsDiv.setAttribute("class", "div_class");
var tabTitle = document.createElement("h1");
tabTitle.innerHTML = "Table of Contents";
body.appendChild(tableOfContentsDiv).appendChild(tabTitle);
var tabOl = document.createElement("ol");
tabOl.setAttribute("class", "align_left");

tableOfContentsDiv.appendChild(tabOl);

/* chapter 1 in TOC */
var first = document.createElement("li");
var firstLink = document.createElement("a");
firstLink.innerHTML = "Introduction";
firstLink.setAttribute("href", "#chapter_one");
tabOl.appendChild(first).appendChild(firstLink);
/* end 1st nest ol */
/* end chapter 1 in TOC */

/* chapter 2 in TOC */
var second = document.createElement("li");
var secondLink = document.createElement("a");
secondLink.innerHTML = "Step by step of how Excelsior functions";
secondLink.setAttribute("href", "#chapter_two");
tabOl.appendChild(second).appendChild(secondLink);
/* end 2nd nest ol */
/* end chapter 2 in TOC */

/* chapter 3 in TOC */
var third = document.createElement("li");
var thirdLink = document.createElement("a");
thirdLink.innerHTML = "How to add a new item to the database";
thirdLink.setAttribute("href", "#chapter_two");
tabOl.appendChild(third).appendChild(thirdLink);
/* end 3rd nest ol */
/* end chapter 3 in TOC */



/* chapter 4 in TOC */
var fourth = document.createElement("li");
var fourthLink = document.createElement("a");
fourthLink.innerHTML = "How to debug Excelsior";
fourthLink.setAttribute("href", "#chapter_four");
tabOl.appendChild(fourth).appendChild(fourthLink);
/* end 4nd nest ol */
/* end chapter 4 in TOC */

/* chapter 5 in TOC */
var fifth = document.createElement("li");
var fifthLink = document.createElement("a");
fifthLink.innerHTML = "Links for further development";
fifthLink.setAttribute("href", "#chapter_five");
tabOl.appendChild(fifth).appendChild(fifthLink);
/* end 5th nest ol */
/* end chapter 5 in TOC */


/* chapter 6 in TOC */
var sixth = document.createElement("li");
var sixthLink = document.createElement("a");
sixthLink.innerHTML = "Current working definitions and functions with query examples";
sixthLink.setAttribute("href", "#chapter_six");
tabOl.appendChild(sixth).appendChild(sixthLink);
/* end 6th nest ol */
/* end chapter 6 in TOC */

/* chapter one */
var firstChapterDiv = document.createElement("div");
firstChapterDiv.setAttribute("class", "div_class");
firstChapterDiv.setAttribute("id", "chapter_one");

var firstChapterTitle = document.createElement("h1");
firstChapterTitle.innerHTML = "Introduction";
body.appendChild(firstChapterDiv).appendChild(firstChapterTitle);
var firstChapterP = document.createElement("p");
firstChapterP.innerHTML = "This manual will instruct the administrator on how to properly add a new definition or function to the database. Documentation of code is not covered here, but is explicitly documented within the source code which is available to the administrator.";
firstChapterDiv.appendChild(firstChapterP);
/* end chapter one */

/* chapter two */
var secondChapterDiv = document.createElement("div");
secondChapterDiv.setAttribute("class", "div_class");
secondChapterDiv.setAttribute("id", "chapter_two");

var secondChapterTitle = document.createElement("h1");
secondChapterTitle.innerHTML = "Step by step of how Excelsior functions";
body.appendChild(secondChapterDiv).appendChild(secondChapterTitle);
var secondChapterP = document.createElement("p");
secondChapterP.innerHTML = "This is the general order of how Excelsior functions, from user query to output:";
secondChapterDiv.appendChild(secondChapterP);
var secondChapterOl = document.createElement("ol");
secondChapterDiv.appendChild(secondChapterOl);
secondChapterOlLi1 = document.createElement("li");
secondChapterOlLi1.innerHTML = "The user types a question into the form on the home page.";
secondChapterOl.appendChild(secondChapterOlLi1);
secondChapterOlLi2 = document.createElement("li");
secondChapterOlLi2.innerHTML = "The words that the user typed will be tagged with parts of speech in 'script.js'.";
secondChapterOl.appendChild(secondChapterOlLi2);
secondChapterOlLi3 = document.createElement("li");
secondChapterOlLi3.innerHTML = "The Porter / Stemmer algorithm is applied to the tagged words in 'script.js'.";
secondChapterOl.appendChild(secondChapterOlLi3);
secondChapterOlLi4 = document.createElement("li");
secondChapterOlLi4.innerHTML = "The stemmed words are sent to the bag of words 'script.js' -> functions/database_query.php.";
secondChapterOl.appendChild(secondChapterOlLi4);
secondChapterOlLi5 = document.createElement("li");
secondChapterOlLi5.innerHTML = "'database_query.php' then calls functions/bow_processing.php. A similarity algorithm will then go through the entire bag of words and return the most similar items, primary key to 'database_query.php'.";
secondChapterOl.appendChild(secondChapterOlLi5);
secondChapterOlLi6 = document.createElement("li");
secondChapterOlLi6.innerHTML = "This primary key is then used to retrieve that item from the database.";
secondChapterOl.appendChild(secondChapterOlLi6);
secondChapterOlLi7 = document.createElement("li");
secondChapterOlLi7.innerHTML = "'database_query.php' sends the row back to the client.";
secondChapterOl.appendChild(secondChapterOlLi7);
secondChapterOlLi8 = document.createElement("li");
secondChapterOlLi8.innerHTML = "'script.js' parses that response and displays it on the chat conversation.";
secondChapterOl.appendChild(secondChapterOlLi8);
/* end chapter 2 */

/* chapter three */
var thirdChapterDiv = document.createElement("div");
thirdChapterDiv.setAttribute("class", "div_class");
thirdChapterDiv.setAttribute("id", "chapter_three");

var thirdChapterTitle = document.createElement("h1");
thirdChapterTitle.innerHTML = "How to add a new item to the database";
body.appendChild(thirdChapterDiv).appendChild(thirdChapterTitle);
var thirdChapterP = document.createElement("p");
thirdChapterP.innerHTML = "The issue with adding a new item to the database is that if the admin only adds the new item to the DB, then it will not be queryable by the bag of words, and thus not processable by the stemmer algorithm. These steps must be followed to make a fully queryable item:";
thirdChapterDiv.appendChild(thirdChapterP);
var thirdChapterOl = document.createElement("ol");
thirdChapterDiv.appendChild(thirdChapterOl);
thirdChapterOlLi1 = document.createElement("li");
thirdChapterOlLi1.innerHTML = "Decide whether the item should only provide text output, or if it should include a video, image, and/or page reference.";
thirdChapterOl.appendChild(thirdChapterOlLi1);
thirdChapterOlLi2 = document.createElement("li");
thirdChapterOlLi2.innerHTML = "Add the item to the database (using phpmyadmin) to the DEFINITIONS table (if you want only text output), or the FUNCTIONS table (if you want to have other media).";
thirdChapterOl.appendChild(thirdChapterOlLi2);
thirdChapterOlLi3 = document.createElement("li");
thirdChapterOlLi3.innerHTML = "Make sure to fill in all of the columns for that item, to make sure it will display correctly.";
thirdChapterOl.appendChild(thirdChapterOlLi3);
thirdChapterOlLi4 = document.createElement("li");
thirdChapterOlLi4.innerHTML = "From the admin control panel, click the link called 'Append to Bag of Words'.";
thirdChapterOl.appendChild(thirdChapterOlLi4);
thirdChapterOlLi5 = document.createElement("li");
thirdChapterOlLi5.innerHTML = "Enter the table key that you used to add the item to the database into the box on the page. (IMPORTANT: If you incorrectly enter the key, the chatbot will be unable to display the item, so be extra careful!)";
thirdChapterOl.appendChild(thirdChapterOlLi5);
thirdChapterOlLi6 = document.createElement("li");
thirdChapterOlLi6.innerHTML = "Copy the line of PhP code that appears.";
thirdChapterOl.appendChild(thirdChapterOlLi6);
thirdChapterOlLi7 = document.createElement("li");
thirdChapterOlLi7.innerHTML = " Open functions/bow_processing.php.";
thirdChapterOl.appendChild(thirdChapterOlLi7);
thirdChapterOlLi8 = document.createElement("li");
thirdChapterOlLi8.innerHTML = "Paste the line of code into the beginning of the $definitions array (if your item was put into the definitions table), or into the beginning of the $functions array (if your item was put into the functions table).";
thirdChapterOl.appendChild(thirdChapterOlLi8);
thirdChapterOlLi9 = document.createElement("li");
thirdChapterOlLi9.innerHTML = "Overwrite the functions/bow_processing.php in oraserv with your edited version.";
thirdChapterOl.appendChild(thirdChapterOlLi9);
thirdChapterOlLi10 = document.createElement("li");
thirdChapterOlLi10.innerHTML = "Give it a shot on the website! Because there are many potential outputs with overlapping terms, you may need to be specific with your query to get the information you wanted.";
thirdChapterOl.appendChild(thirdChapterOlLi10);
/* end chapter three */


/* chapter four */
var fourthChapterDiv = document.createElement("div");
fourthChapterDiv.setAttribute("class", "div_class");
fourthChapterDiv.setAttribute("id", "chapter_four");

var fourthChapterTitle = document.createElement("h1");
fourthChapterTitle.innerHTML = "How to debug adding an item to Excelsior";
body.appendChild(fourthChapterDiv).appendChild(fourthChapterTitle);
var fourthChapterP = document.createElement("p");
fourthChapterP.innerHTML = "If an item that you add is not showing up when you query it, try these steps in this order:";
fourthChapterDiv.appendChild(fourthChapterP);
var fourthChapterOl = document.createElement("ol");
fourthChapterDiv.appendChild(fourthChapterOl);
fourthChapterOlLi1 = document.createElement("li");
fourthChapterOlLi1.innerHTML = "Be sure that the SQL syntax to add the item to the DB is added correctly, and that the format of the picture and video links is correct. An item has to have a Youtube Link and a picture link to be functional, or must have the placeholder image at this relative link '/images/NL.jpg'. If either of these requirements are not satisfied, the responses from Excelsior will look very strange due to an error that is unique to Chrome. This can all be completed in phpMyAdmin.";
fourthChapterOl.appendChild(fourthChapterOlLi1);
fourthChapterOlLi2 = document.createElement("li");
fourthChapterOlLi2.innerHTML = "Each term that you add to the BOW must be in its own array. <i>Make sure that the original word is in index 0 of the array.</i>";
fourthChapterOl.appendChild(fourthChapterOlLi2);
fourthChapterOlLi3 = document.createElement("li");
fourthChapterOlLi3.innerHTML = "Make sure that the term is being tagged by the JS POS tagger in 'script.js'.";
fourthChapterOl.appendChild(fourthChapterOlLi3);
fourthChapterOlLi4 = document.createElement("li");
fourthChapterOlLi4.innerHTML = 'Make sure that the stemmed version of term has been added properly to the BOW, as well as similar words to the term. Run any additional words you would like to add through the live demo found at <a href="http://9ol.es/porter_js_demo.html">this link.</a>';
fourthChapterOl.appendChild(fourthChapterOlLi4);
fourthChapterOlLi5 = document.createElement("li");
fourthChapterOlLi5.innerHTML = "Make sure that the word that has been added is not too similar to other terms in the DB. Excelsior is smart, but not HAL9000 smart.";
fourthChapterOl.appendChild(fourthChapterOlLi5);
/* end chapter four */

/* chapter five */
var fifthChapterDiv = document.createElement("div");
fifthChapterDiv.setAttribute("class", "div_class");
fifthChapterDiv.setAttribute("id", "chapter_five");

var fifthChapterTitle = document.createElement("h1");
fifthChapterTitle.innerHTML = "Links for further development";
body.appendChild(fifthChapterDiv).appendChild(fifthChapterTitle);
var fifthChapterP = document.createElement("p");
fifthChapterP.innerHTML = 'Stemmer algorithm is based off of the project at <a href="https://github.com/kristopolous/Porter-Stemmer">this link.</a>';
var fifthChapterP2 = document.createElement("p");
fifthChapterP2.innerHTML = 'Javascript POS tagger is based off the project at <a href="https://github.com/dariusk/pos-js/blob/master/README.md">this link.</a>';
fifthChapterDiv.appendChild(fifthChapterP);
fifthChapterDiv.appendChild(fifthChapterP2);
/* end chapter five */

/* chapter six */
var sixthChapterDiv = document.createElement("div");
sixthChapterDiv.setAttribute("class", "div_class");
sixthChapterDiv.setAttribute("id", "chapter_six");
var sixthChapterTitle = document.createElement("h1");
sixthChapterTitle.innerHTML = "Current working definitions and functions with query examples";
body.appendChild(sixthChapterDiv).appendChild(sixthChapterTitle);
sixthChapterP = document.createElement("p");
sixthChapterUl = document.createElement("ul");
sixthChapterDiv.appendChild(sixthChapterP).appendChild(sixthChapterUl);

var definitionsList = ["absolute cell: What is an absolute cell reference?", "active cell: What is an active cell?", "active sheet: What is an active sheet?", "address: What is an address?", "argument: What is an argument?", "array: What is an array?", "ascending sort: What is an ascending sort?", "axis: What is an axis?", "bar chart: What is a bar chart?", "cell: What is a bar chart?", "cell reference: What is a reference?", "change history: What is the history?", "comment: What is a comment?", "constant: What is a constant?", "copy area: What is the copy area?", "criteria: What are criteria?", "data form: What is a data form?", "data series: What is a data series?", "data validation: What is data validation?", "database: What is a database?", "dependents: What are dependents?", "descending sort: What is a descending sort?", "destination area: What is a destination area?", "embedded chart: What is an inner chart?", "excel table: What is an excel table?", "expression: What is an expression?", "external data: What is external data?", "federal tax: What is federal tax?", "flag: What is a flag?", "font: What is a font?", "formula bar: What is a formula bar?", "gross pay amount: What is the gross pay amount?", "hyperlink: What is a hyperlink?", "iteration: What is an iteration?", "join: What is a join?", "line graph: What is a line graph?", "matrix: What is a matrix?", "merge: What is a merge?", "name: What is a name?", "name box: What is a name box?", "net pay: What is net pay?", "operand: What is an operand?", "outer join: What is an outer join?", "page break: What is a page break?", "parameter: What is a parameter?", "password: What is a password?", "paste area: What is a paste area?", "pie chart: What is a pie chart?", "point: What is a point?", "primary key: What is a primary key?", "read only: What is read only?", "row: What is a row?", "spreadsheet: What is a spreadsheet?", "sql: What is sql?", "state tax: What is state tax?", "tax: What is tax?", "template: What is a template?", "trendline: What is a trendline?", "truncated: Why are there pound signs?", "value: What is a value?", "worksheet: What is a worksheet?", "XML: What is XML?", "add new column: How do I add a new column?", "adjust table color style: How do I adjust a table's color?", "average: How do I find the average?", "change row height: How do I change a row's height?", "chart creation: How do I add a chart? ", "conditional formatting: How do I use conditional formatting?", "connection between file and sheet: How do I connect a file to my worksheet?", "count: How do I find a count?", "dark border: How do I add a border?", "filter: How do I use filter?", "format table comma separator: How do I add a comma separator?", "format without decimals and $: How do I get rid of decimals?", "fv: How do I find the future value of something?", "get data from another window sheet: How do I get data from another window?", "how much of the year has passed:  how much of the year has passed?", "if statement: How do I use an if statement?", "len: What is len?", "macro: How do I use a macro?", "max: How do I find the maximum value?", "min: How do I find a minimum value?", "mm/dd/yy: How do I format the date?", "named range: How do I use a named range?", "overtime function: What is overtime?", "pivot: How do I use pivot?", "pmt: How do I calculate monthly payments?", "put work in another window: How do I move my work to another window?", "remove duplicates: How do I remove a duplicate?", "report named range: What is a named range report?", "Select a cell: How do I do a select data?", "Select a row: How do I do a select list?", "Subtotal tool: How do I find subtotals?", "SUM: How do I find the sum?", "TODAY: How do I find today?", "Variable data tables: What is a variable data table?", "VLOOKUP: How do I use vlookup?Definitions:", "absolute cell: What is an absolute cell reference?", "active cell: What is an active cell?", "active sheet: What is an active sheet?", "address: What is an address?", "argument: What is an argument?", "array: What is an array?", "ascending sort: What is an ascending sort?", "axis: What is an axis?", "bar chart: What is a bar chart?", "cell: What is a bar chart?", "cell reference: What is a reference?", "change history: What is the history?", "comment: What is a comment?", "constant: What is a constant?", "copy area: What is the copy area?", "criteria: What are criteria?", "data form: What is a data form?", "data series: What is a data series?", "data validation: What is data validation?", "database: What is a database?", "dependents: What are dependents?", "descending sort: What is a descending sort?", "destination area: What is a destination area?", "embedded chart: What is an inner chart?", "excel table: What is an excel table?", "expression: What is an expression?", "external data: What is external data?", "federal tax: What is federal tax?", "flag: What is a flag?", "font: What is a font?", "formula bar: What is a formula bar?", "gross pay amount: What is the gross pay amount?", "hyperlink: What is a hyperlink?", "iteration: What is an iteration?", "join: What is a join?", "line graph: What is a line graph?", "matrix: What is a matrix?", "merge: What is a merge?", "name: What is a name?", "name box: What is a name box?", "net pay: What is net pay?", "operand: What is an operand?", "outer join: What is an outer join?", "page break: What is a page break?", "parameter: What is a parameter?", "password: What is a password?", "paste area: What is a paste area?", "pie chart: What is a pie chart?", "point: What is a point?", "primary key: What is a primary key?", "read only: What is read only?", "row: What is a row?Definitions:", "absolute cell: What is an absolute cell reference?", "active cell: What is an active cell?", "active sheet: What is an active sheet?", "address: What is an address?", "argument: What is an argument?", "array: What is an array?", "ascending sort: What is an ascending sort?", "axis: What is an axis?", "bar chart: What is a bar chart?", "cell: What is a bar chart?", "cell reference: What is a reference?", "change history: What is the history?", "comment: What is a comment?", "constant: What is a constant?", "copy area: What is the copy area?", "criteria: What are criteria?", "data form: What is a data form?", "data series: What is a data series?", "data validation: What is data validation?", "database: What is a database?", "dependents: What are dependents?", "descending sort: What is a descending sort?", "destination area: What is a destination area?", "embedded chart: What is an inner chart?", "excel table: What is an excel table?", "expression: What is an expression?", "external data: What is external data?", "federal tax: What is federal tax?", "flag: What is a flag?", "font: What is a font?", "formula bar: What is a formula bar?", "gross pay amount: What is the gross pay amount?", "hyperlink: What is a hyperlink?", "iteration: What is an iteration?", "join: What is a join?", "line graph: What is a line graph?", "matrix: What is a matrix?", "merge: What is a merge?", "name: What is a name?", "name box: What is a name box?", "net pay: What is net pay?", "operand: What is an operand?", "outer join: What is an outer join?", "page break: What is a page break?", "parameter: What is a parameter?", "password: What is a password?", "paste area: What is a paste area?", "pie chart: What is a pie chart?", "point: What is a point?", "primary key: What is a primary key?", "read only: What is read only?", "row: What is a row?", "spreadsheet: What is a spreadsheet?", "sql: What is sql?", "state tax: What is state tax?", "tax: What is tax?", "template: What is a template?", "trendline: What is a trendline?", "truncated: Why are there pound signs?", "value: What is a value?", "worksheet: What is a worksheet?", "XML: What is XML?", "add new column: How do I add a new column?", "adjust table color style: How do I adjust a table's color?", "average: How do I find the average?", "change row height: How do I change a row's height?", "chart creation: How do I add a chart? ", "conditional formatting: How do I use conditional formatting?", "connection between file and sheet: How do I connect a file to my worksheet?", "count: How do I find a count?", "dark border: How do I add a border?", "filter: How do I use filter?", "format table comma separator: How do I add a comma separator?", "format without decimals and $: How do I get rid of decimals?", "fv: How do I find the future value of something?", "get data from another window sheet: How do I get data from another window?", "how much of the year has passed:  how much of the year has passed?", "if statement: How do I use an if statement?", "len: What is len?", "macro: How do I use a macro?", "max: How do I find the maximum value?", "min: How do I find a minimum value?", "mm/dd/yy: How do I format the date?", "named range: How do I use a named range?", "overtime function: What is overtime?", "pivot: How do I use pivot?", "pmt: How do I calculate monthly payments?", "put work in another window: How do I move my work to another window?", "remove duplicates: How do I remove a duplicate?", "report named range: What is a named range report?", "Select a cell: How do I do a select data?", "Select a row: How do I do a select list?", "Subtotal tool: How do I find subtotals?", "SUM: How do I find the sum?", "TODAY: How do I find today?", "Variable data tables: What is a variable data table?", "VLOOKUP: How do I use vlookup?", "spreadsheet: What is a spreadsheet?", "sql: What is sql?", "state tax: What is state tax?", "tax: What is tax?", "template: What is a template?", "trendline: What is a trendline?", "truncated: Why are there pound signs?", "value: What is a value?", "worksheet: What is a worksheet?", "XML: What is XML?", "add new column: How do I add a new column?", "adjust table color style: How do I adjust a table's color?", "average: How do I find the average?", "change row height: How do I change a row's height?", "chart creation: How do I add a chart?", "conditional formatting: How do I use conditional formatting?", "connection between file and sheet: How do I connect a file to my worksheet?", "count: How do I find a count?", "dark border: How do I add a border?", "filter: How do I use filter?", "format table comma separator: How do I add a comma separator?", "format without decimals and $: How do I get rid of decimals?", "fv: How do I find the future value of something?", "get data from another window sheet: How do I get data from another window?", "how much of the year has passed:  how much of the year has passed?", "if statement: How do I use an if statement?", "len: What is len?", "macro: How do I use a macro?", "max: How do I find the maximum value?", "min: How do I find a minimum value?", "mm/dd/yy: How do I format the date?", "named range: How do I use a named range?", "overtime function: What is overtime?", "pivot: How do I use pivot?", "pmt: How do I calculate monthly payments?", "put work in another window: How do I move my work to another window?", "remove duplicates: How do I remove a duplicate?", "report named range: What is a named range report?", "Select a cell: How do I do a select data?", "Select a row: How do I do a select list?", "Subtotal tool: How do I find subtotals?", "SUM: How do I find the sum?", "TODAY: How do I find today?", "Variable data tables: What is a variable data table?", "VLOOKUP: How do I use vlookup?"];

for (var i = 0; i < definitionsList.length; i++) {
    var sixthChapterLi = document.createElement("li");
    sixthChapterLi.innerHTML = definitionsList[i].toString();
    sixthChapterUl.appendChild(sixthChapterLi);
}


/* end chapter six */

function createNav() {
    var nav = document.createElement("nav");
    nav.setAttribute("class", "navbar navbar-inverse navbar-fixed-top");
    var divContainerFluid = document.createElement("div");
    divContainerFluid.setAttribute("class", "container-fluid");
    var divNavbarHeader = document.createElement("div");
    divNavbarHeader.setAttribute("class", "navbar-header");
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "navbar-toggle");
    button.setAttribute("data-toggle", "collapse");
    button.setAttribute("data-target", "#myNavbar");
    var spanBarOne = document.createElement("span");
    spanBarOne.setAttribute("class", "icon-bar");
    var spanBarTwo = document.createElement("span");
    spanBarTwo.setAttribute("class", "icon-bar");
    var spanBarThree = document.createElement("span");
    spanBarThree.setAttribute("class", "icon-bar");
    var logo = document.createElement("a");
    logo.setAttribute("class", "navbar-brand");
    logo.setAttribute("href", "../index.html");
    logo.innerHTML = "Excelsior Chatbot";
    var navbarListDiv = document.createElement("div");
    navbarListDiv.setAttribute("class", "collapse navbar-collapse");
    navbarListDiv.setAttribute("id", "myNavbar");
    var navbarList = document.createElement("ul");
    navbarList.setAttribute("class", "nav navbar-nav navbar-right");
    var userManualListItem = document.createElement("li");
    var userManual = document.createElement("a");
    userManual.setAttribute("href", "manuals.html");
    userManual.innerHTML = "User Manual";
    var adminLoginListItem = document.createElement("li");
    var adminLogin = document.createElement("a");
    adminLogin.setAttribute("href", "../login.php");
    adminLogin.innerHTML = "Administrator Login";
    var symbolsListItem = document.createElement("li");
    var symbols = document.createElement("a");
    symbols.setAttribute("href", "symbols.html");
    symbols.innerHTML = "Common Symbols in Excel";
    document.querySelector("body").appendChild(nav);
    nav.appendChild(divContainerFluid);
    divContainerFluid.appendChild(divNavbarHeader);
    divNavbarHeader.appendChild(button);
    button.appendChild(spanBarOne);
    button.appendChild(spanBarTwo);
    button.appendChild(spanBarThree);
    divNavbarHeader.appendChild(logo);
    divContainerFluid.appendChild(navbarListDiv);
    navbarListDiv.appendChild(navbarList);
    navbarList.appendChild(userManualListItem);
    userManualListItem.appendChild(userManual);
    navbarList.appendChild(symbolsListItem);
    symbolsListItem.appendChild(symbols);
    navbarList.appendChild(adminLoginListItem);
    adminLoginListItem.appendChild(adminLogin);


}