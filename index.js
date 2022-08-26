/** 
  Creating interactive buttons: Open Modal to trigger the opening of overlay
  

**/
document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
})

/** 
  Creating interactive buttons: Close Modal to trigger the closing of overlay
  

**/
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})