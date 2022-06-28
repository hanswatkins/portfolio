console.log('Connected to nav-script.js')

// query selectors
const folderClosed = document.getElementById("folder")
const folderOpen = document.getElementById("folder-open")

//functions

openTheFolder = function() {
    document.getElementById("folder").style.display = "none";
    document.getElementById("folder-open").style.display = "block";

}
closeTheFolder = function() {
    document.getElementById("folder-open").style.display = "none";
    document.getElementById("folder").style.display = "block";
}

//event listeners
folderClosed.addEventListener("click", openTheFolder)
folderOpen.addEventListener("click", closeTheFolder)
