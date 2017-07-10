/*  creation script for  the main page */

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
    var symbolsListItem = document.createElement("li");
    var symbols = document.createElement("a");
    symbols.setAttribute("href", "symbols.html");
    symbols.innerHTML = "Common Symbols in Excel";
    var adminLoginListItem = document.createElement("li");
    var adminLogin = document.createElement("a");
    adminLogin.setAttribute("href", "login.php");
    adminLogin.innerHTML = "Administrator Login";


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
    var space = document.createElement("div");
    space.setAttribute("class", "space");
    document.querySelector("body").appendChild(space);

}

/* make the header,  div, and h1 and append */
createNav();

/* make the main body */
var divMain = document.createElement("div");
divMain.setAttribute("class", "main");
divMain.setAttribute("id","mainDiv");
divMain.setAttribute("style","margin:auto;");
var divContainer2 = document.createElement("div");
divContainer2.setAttribute("class", "container"); //everything is in this
divContainer2.setAttribute("style","margin:auto;");


//This creates the text input row and submit button
var divRow = document.createElement("div");
divRow.setAttribute("class", "row");
divRow.setAttribute("style","margin:auto;");
var form = document.createElement("form");
form.setAttribute("class", "form");
form.setAttribute("autocomplete", "off");
var innerFormDiv = document.createElement("div");
innerFormDiv.setAttribute("class", "col-xs-8 col-s-10");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("maxlength","70");
input.setAttribute("class", "form-control");
input.setAttribute("id", "query");
input.setAttribute("placeholder", "Ask me anything! (about Excel, please)");
var otherInnerFormDiv = document.createElement("div");
otherInnerFormDiv.setAttribute("class", "col-xs-4 col-s-2");
var btn = document.createElement("button");
btn.setAttribute("type", "submit");
btn.setAttribute("class", "btn btn-primary");
var span = document.createElement("span");
span.setAttribute("class", "glyphicon glyphicon-menu-right");
span.setAttribute("aria-hidden", "true");

//the List from which items are appended to
var divRow2 = document.createElement("div");
divRow2.setAttribute("class", "row");
//divRow2.setAttribute("id","fixed");
var innerDivRow2 = document.createElement("div");
innerDivRow2.setAttribute("class", "col-xs-8 col-s-10");
var ul = document.createElement("ul");
ul.setAttribute("id", "comments");
ul.setAttribute("class", "list-unstyled");
var li = document.createElement("li");
li.setAttribute("class", "response");
li.innerHTML = "Hi there! I'm Excelsior. What can I do for you?";
var divMain2 = document.createElement("div");
divMain2.setAttribute("class", "container");
var innerDivMain2 = document.createElement("div");
innerDivMain2.setAttribute("class", "lesserSpace");

/* append the elements to the body tag */
document.querySelector("body").appendChild(divMain);
divMain.appendChild(divContainer2);
divContainer2.appendChild(divRow2);
divContainer2.appendChild(divRow);
divRow.appendChild(form);
divRow2.appendChild(innerDivRow2);
innerDivRow2.appendChild(ul);
ul.appendChild(li);
form.appendChild(innerFormDiv);
form.appendChild(otherInnerFormDiv);
innerFormDiv.appendChild(input);
otherInnerFormDiv.appendChild(btn);
btn.appendChild(span);
document.querySelector("body").appendChild(divMain2);
divMain2.appendChild(innerDivMain2);
