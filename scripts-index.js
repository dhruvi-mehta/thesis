console.log('connected');

/// Get the button that opens the pop-up box
var popupBtn = document.getElementById("show-popup-btn");
var closeBtn = document.getElementById("close-btn");
// Get the pop-up box
var popupBox = document.getElementById("popup-box");

// Get the button that closes the pop-up box


// window.onload = function() {

  var popupBox = document.getElementById('popup-box');

  closeBtn.onclick = function(){
    popupBox.style.display = "none";
  }
  popupBtn.onclick = function(){
    popupBox.style.display = "block";
  }


// popupBtn.onclick = 
  // if( popupBox.style.display == "none"){
  // }

// }

// When the user clicks on the button, open the pop-up box
// popupBtn.onclick = function() {
//   popupBox.style.display = "block";
// }

// When the user clicks on the close button, close the pop-up box


// When the user clicks anywhere outside of the pop-up box, close it
// window.onclick = function(event) {
//   if (event.target == popupBox) {
//     popupBox.style.display = "none";
//   }
// }


