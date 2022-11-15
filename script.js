function setup() {
    // add event listeners here
    document.getElementById("closebtn").addEventListener("click", closeSidebar);
    document.getElementById("openbtn").addEventListener("click", openSidebar);
}

function openSidebar() {
    expandedSize = "250px";
    // make sidebar wider, and add margin to main display
    document.getElementById("sidebar").style.width = expandedSize;
    document.getElementById("main").style.marginLeft = expandedSize;
    document.getElementById("closebtn").style.display = "block"; // show close button
    document.getElementById("openbtn").style.display = "none";   // hide open button
    showText();
}

function closeSidebar() {
    closedSize = "80px"
    // make sidebar less wide, lessen margin to main display
    document.getElementById("sidebar").style.width = closedSize;
    document.getElementById("main").style.marginLeft = closedSize;
    document.getElementById("closebtn").style.display = "none"; // hide close button
    document.getElementById("openbtn").style.display = "block"; // show open button
    hideText();
}

function showText() {
    
}
function hideText() {
   
}