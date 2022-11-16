function setup() {
    // add event listeners here
    document.getElementById("closebtn").addEventListener("click", closeSidebar);
    document.getElementById("openbtn").addEventListener("click", openSidebar);
    document.getElementById("home").addEventListener("click", showHomePage);
    document.getElementById("library").addEventListener("click", showLibraryPage);
    document.getElementById("history").addEventListener("click", showHistoryPage);
    document.getElementById("settings").addEventListener("click", showSettingsPage);
    document.getElementById("spExpandbtn").addEventListener("click", showFullscreenPlayer)
    document.getElementById("closefspbutton").addEventListener("click", closeFullscreenPlayer);
}

//-----------------------------------------------------------------
// SIDEBAR FUNCTIONS
//-----------------------------------------------------------------
function openSidebar() {
    expandedSize = "250px";
    // make sidebar wider, and add margin to main display
    document.getElementById("sidebar").style.width = expandedSize;
    pages = document.getElementById("main").children;
    for(let i = 0; i < pages.length; i++) pages[i].style.marginLeft = expandedSize;
    document.getElementById("closebtn").style.display = "block"; // show close button
    document.getElementById("openbtn").style.display = "none";   // hide open button
    showText();
}

function closeSidebar() {
    closedSize = "80px"
    // make sidebar less wide, lessen margin to main display
    document.getElementById("sidebar").style.width = closedSize;
    pages = document.getElementById("main").children;
    for(let i = 0; i < pages.length; i++) pages[i].style.marginLeft = closedSize;
    document.getElementById("closebtn").style.display = "none"; // hide close button
    document.getElementById("openbtn").style.display = "block"; // show open button
    hideText();
}
function showText() {
    
}
function hideText() {
   
}

//-----------------------------------------------------------------
// PAGE CHANGING FUNCTIONS
//-----------------------------------------------------------------

function showHomePage() {
    clearPages();
    document.getElementById("homePage").style.display = "block";
}
function showLibraryPage() {
    clearPages();
    document.getElementById("libraryPage").style.display = "block";
}
function showHistoryPage() {
    clearPages();
    document.getElementById("historyPage").style.display = "block";
}
function showSettingsPage() {
    clearPages();
    document.getElementById("settingsPage").style.display = "block";
}
function showFullscreenPlayer() {
    clearPages();
    document.getElementById("fullscreenPlayer").style.display = "block";
    document.getElementById("closefspbutton").style.display = "block";
}
function closeFullscreenPlayer() {
    document.getElementById("fullscreenPlayer").style.display = "none";
    document.getElementById("closefspbutton").style.display = "none";
}

function clearPages() {
    pages = document.getElementsByClassName("page");
    for(let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
}