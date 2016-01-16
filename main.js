function getContent(fragmentId, callback) {
    "use strict";
    var request = new XMLHttpRequest();
    request.onload = function () {
        callback(request.responseText);
    };
    /* var partials = {
        home: "This is the Home Page. Welcome to my site.",
        about: "This is the about Page.",
        contact: "This the the Contact Page."
    };
    
    //return partials[fragmentId];
     callback(partials[fragmentId]);*/
    request.open("GET", fragmentId + ".html");
    request.send(null);
}
function setActiveLink(fragmentId) {
    "use strict";
    var navbarDiv = document.querySelectorAll("#navbar a"),
        links = navbarDiv.children,
        i,
        link,
        pageName;
    for (i = 0; i < links.length; i++) {
        link = links[i];
        pageName = link.getAttribute("href").substr(1);
        if (pageName === fragmentId) {
            link.setAttribute("class", "active");
            
        } else {
            link.removeAttribute("class");
        }
    }
}
function navigate() {
    "use strict";
    var contentDiv = document.getElementById("content"),
        fragmentId = location.hash.substr(1);
    getContent(fragmentId, function (content) {
        contentDiv.innerHTML = content;
    });
    

    
    if (!location.hash) {
        location.hash = "#home";
       
    }
    setActiveLink(fragmentId);
    
 
    
}
navigate();

window.addEventListener("hashchange", navigate);
