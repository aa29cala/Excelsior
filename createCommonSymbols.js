createNav();
var body = document.querySelector("body");
var titleDiv = document.createElement("div");
titleDiv.setAttribute("class", "div_title");
titleDiv.style.marginTop = '60px';
var titleDivTitle = document.createElement("h1");
titleDivTitle.innerHTML = "Common Excel Symbols";

body.appendChild(titleDiv).appendChild(titleDivTitle);

var mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "div_class");

/* 
 * any symbols that are added are added to the page in the following structure:
 * var variableName = document.createElement("p");
 * variableName.innerHTML = "<b>>></b> <br> text goes here <br>";
 */

var carets = document.createElement("p");
carets.innerHTML = "<b>>></b> <br> Will indicate an action the user is going to perform. <br>";
var addition = document.createElement("p");
addition.innerHTML = "<b>+</b> <br> Is the symbol for addition.<br>";
var mult = document.createElement("p");
var caret = document.createElement("p");
caret.innerHTML = "<b>^</b> <br>The caret icon indicates there is an exponent after the caret. For example, 2^3 = 8.<br>";
var subtraction = document.createElement("p");
subtraction.innerHTML = "<b>-</b> <br>Is the symbol for subtraction.<br>";
var divide = document.createElement("p");
divide.innerHTML = "<b>/</b> <br>Is the symbol for division.<br>";
mult.innerHTML = "<b>*</b> <br>Is the symbol for multiplication.<br>";
var question = document.createElement("p");
question.innerHTML = "<b>?</b> <br> Question marks will direct the user to answer the next question on the BlackBoard Q&A. <br>";
var ctrl = document.createElement("p");
ctrl.innerHTML = "<b>CTRL+</b> <br>Indicates that the user should hold the CONTROL key while pressing the other displayed character. For example CTRL+C indicates to hold the CONTROL key and press the letter C at the same time.<br>";
var beforeGoOn = document.createElement("p");
beforeGoOn.innerHTML = "<b>BEFORE YOU GO ON</b> <br>Marks when the user should check their work for accuracy. This keeps errors from happening and/or compounding.<br>";
var undo = document.createElement("p");
undo.innerHTML = "<b>undo</b> <br>The undo function is in the Quick Access Toolbar, or can be accessed with CTRL+Z. <br>";

/* 
 * then the new variableName must be appended to the page like such:
 * mainDiv.appendChild(variableName);
 */
body.appendChild(mainDiv);
mainDiv.appendChild(carets);
mainDiv.appendChild(addition);
mainDiv.appendChild(mult);
mainDiv.appendChild(caret);
mainDiv.appendChild(subtraction);
mainDiv.appendChild(divide);
mainDiv.appendChild(question);
mainDiv.appendChild(ctrl);
mainDiv.appendChild(beforeGoOn);
mainDiv.appendChild(undo);


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
    logo.setAttribute("href", "index.html");
    logo.innerHTML = "Excelsior Chatbot";
    var navbarListDiv = document.createElement("div");
    navbarListDiv.setAttribute("class", "collapse navbar-collapse");
    navbarListDiv.setAttribute("id", "myNavbar");
    var navbarList = document.createElement("ul");
    navbarList.setAttribute("class", "nav navbar-nav navbar-right");
    var userManualListItem = document.createElement("li");
    var userManual = document.createElement("a");
    userManual.setAttribute("href", "manuals/manuals.html");
    userManual.innerHTML = "User Manual";
    var adminLoginListItem = document.createElement("li");
    var adminLogin = document.createElement("a");
    adminLogin.setAttribute("href", "login.php");
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
