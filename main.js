function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("contentArea").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("contentArea").style.marginLeft= "0";
}

function showContent(content) {
    document.getElementById("contentTitle").innerHTML = content;
    document.getElementById("contentText").innerHTML = "Content for " + content;
}