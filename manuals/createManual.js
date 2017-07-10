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
date.innerHTML = "Updated March 2017";
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

/* 1st nest ol */
var nest1 = document.createElement("ol");
nest1.setAttribute("type", "a");
var nest1Li1 = document.createElement("li");
var nest1Li1Link = document.createElement("a");
nest1Li1Link.setAttribute("href", "#scope");
nest1Li1Link.innerHTML = "Scope";
first.appendChild(nest1).appendChild(nest1Li1).appendChild(nest1Li1Link);
/* end 1st nest ol */
/* end chapter 1 in TOC */


/* chapter 2 in TOC */
var second = document.createElement("li");
var secondLink = document.createElement("a");
secondLink.innerHTML = "How to use Excelsior";
secondLink.setAttribute("href", "#how_to");
tabOl.appendChild(second).appendChild(secondLink);
/* end chapter 2 in TOC */

/* chapter 3 in TOC */
var third = document.createElement("li");
var thirdLink = document.createElement("a");
thirdLink.innerHTML = "Troubleshooting";
thirdLink.setAttribute("href", "#troubleshooting");
tabOl.appendChild(third).appendChild(thirdLink);
/* end chapter 3 in TOC */


/* chapter one */
var firstChapterDiv = document.createElement("div");
firstChapterDiv.setAttribute("class", "div_class");
firstChapterDiv.setAttribute("id", "chapter_one");

var firstChapterTitle = document.createElement("h1");
firstChapterTitle.innerHTML = "Introduction";
body.appendChild(firstChapterDiv).appendChild(firstChapterTitle);

var firstChapterP = document.createElement("p");
firstChapterP.innerHTML = "Excelsior is a chatbot designed to assist students taking Siena's CSIS 010 and CSIS 011 courses. This chatbot can help with any topic that the labs in those courses cover.";
firstChapterDiv.appendChild(firstChapterP);

var scope = document.createElement("h1");
scope.setAttribute("id", "scope");
scope.setAttribute("style", "font-size: 2.5rem;");
scope.innerHTML = "Scope of Project";
firstChapterDiv.appendChild(scope);
var firstChapterP2 = document.createElement("p");
var firstChapterP2txt = document.createTextNode("This project is intended for beginner-level Excel users. It will be able to competently understand the questions that a user has about beginner topics, but will not cover topics like VBA, or how to build a space ship using only Excel and the power of will.");
firstChapterDiv.appendChild(firstChapterP2txt);

/* end chapter one */

/* chapter 2 */
var secondChapterDiv = document.createElement("div");
secondChapterDiv.setAttribute("class", "div_class");
secondChapterDiv.setAttribute("id", "how_to");

var secondChapterTitle = document.createElement("h1");
secondChapterTitle.innerHTML = "How to Use Excelsior";
body.appendChild(secondChapterDiv).appendChild(secondChapterTitle);

var secondChapterPtxt = document.createTextNode("Try asking Excelsior questions like:");
var secondChapterPul = document.createElement("ul");
secondChapterPul.setAttribute("class", "align_left");
var secondChapterLiItems = ["What is an absolute cell?", "How do I calculate PMT?", "What does the function bar do?"];

var secondChapterLi1 = document.createElement("li");
var secondChapterLi2 = document.createElement("li");
var secondChapterLi3 = document.createElement("li");

secondChapterLi1.innerHTML = secondChapterLiItems[0];
secondChapterLi2.innerHTML = secondChapterLiItems[1];
secondChapterLi3.innerHTML = secondChapterLiItems[2];

secondChapterPul.appendChild(secondChapterLi1);
secondChapterPul.appendChild(secondChapterLi2);
secondChapterPul.appendChild(secondChapterLi3);


var secondChapterPtxt2 = document.createTextNode("Please do not say things like:");
var secondChapterPul2 = document.createElement("ul");
secondChapterPul2.setAttribute("class", "align_left");
var secondChapterLi2Items = ["Are you Skynet?", "Open the pod bay doors, Excelsior.", "Where are the bomb codes, Excelsior?"];

var secondChapterLi2_1 = document.createElement("li");
var secondChapterLi2_2 = document.createElement("li");
var secondChapterLi2_3 = document.createElement("li");

secondChapterLi2_1.innerHTML = secondChapterLi2Items[0];
secondChapterLi2_2.innerHTML = secondChapterLi2Items[1];
secondChapterLi2_3.innerHTML = secondChapterLi2Items[2];

secondChapterPul2.appendChild(secondChapterLi2_1);
secondChapterPul2.appendChild(secondChapterLi2_2);
secondChapterPul2.appendChild(secondChapterLi2_3);

var dontWasteYourTimeJustPressEnter = document.createTextNode("Just type your question and click the mail button or press enter!");

// add it all
secondChapterDiv.appendChild(secondChapterPtxt);
secondChapterDiv.appendChild(secondChapterPul);
secondChapterDiv.appendChild(secondChapterPtxt2);
secondChapterDiv.appendChild(secondChapterPul2);
secondChapterDiv.appendChild(dontWasteYourTimeJustPressEnter);
/* end chapter 2 */

/* chapter 3 */

//make the div for the troubleshooting chapter and title
var thirdChapterDiv = document.createElement("div");
thirdChapterDiv.setAttribute("class", "div_class");
thirdChapterDiv.setAttribute("id", "troubleshooting");
thirdChapterTitle = document.createElement("h1");
thirdChapterTitle.innerHTML = "Troubleshooting";
body.appendChild(thirdChapterDiv).appendChild(thirdChapterTitle);


thirdChapterP = document.createElement("p");
thirdChapterDiv.appendChild(thirdChapterP).appendChild(document.createTextNode("Having issues? Computer getting you down? Let's see if we can help."));
thirdChapterDiv.appendChild(document.createElement("b"));
thirdChapterDiv.appendChild(document.createTextNode("Are you asking more than one question at once? For example, if you asked 'How do I find the max and min?' instead ask for the max and min in two separate queries."));

/* end chapter 3 */


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
    symbols.setAttribute("href", "../symbols.html");
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
