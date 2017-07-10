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

}

/* make the header,  div, and h1 and append */
createNav();