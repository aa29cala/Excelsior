/*  creation script for  the main page */

/* make the header,  div, and h1 and append */
var header = document.createElement("header");
header.setAttribute("class", "header");

var divContainer = document.createElement("div");
divContainer.setAttribute("class", "container");

var title = document.createElement("h1");
title.innerHTML = "Excelsior Chatbot";

document.querySelector("body").appendChild(header);
document.querySelector("header").appendChild(divContainer);
document.querySelector("div").appendChild(title);

/* make the main body */
var divMain = document.createElement("div");
divMain.setAttribute("class", "main");
var divContainer2 = document.createElement("div");
divContainer2.setAttribute("class", "container");
var divRow = document.createElement("div");
divRow.setAttribute("class", "row");
var form = document.createElement("form");
form.setAttribute("class", "form");
var innerFormDiv = document.createElement("div");
innerFormDiv.setAttribute("class", "col-xs-8 col-s-10");
var input = document.createElement("input");
input.setAttribute("type", "text");
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
var divRow2 = document.createElement("div");
divRow2.setAttribute("class", "row");
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
var innerDivMain2Form = document.createElement("form");
innerDivMain2Form.setAttribute("class", "form");
var footerDiv = document.createElement("div");
var footer = document.createElement("footer");
var ft = document.createElement("ft");
var a = document.createElement("a");
a.setAttribute("href", "login.php");
a.innerHTML = "Administrator Login ";
var userManual = document.createElement("a");
userManual.setAttribute("href", "manuals/manuals.html");
userManual.innerHTML = " User Manual";
var divTaggedText = document.createElement("div");
divTaggedText.setAttribute("id", "tagged_text");

document.querySelector("body").appendChild(divMain);
divMain.appendChild(divContainer2);
divContainer2.appendChild(divRow);
divContainer2.appendChild(divRow2);
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
innerDivMain2.appendChild(innerDivMain2Form);
divMain2.appendChild(footerDiv);
footerDiv.appendChild(footer);
footer.appendChild(ft);
ft.appendChild(a);
ft.appendChild(document.createElement("br"));
ft.appendChild(userManual);
document.querySelector("body").appendChild(divTaggedText);