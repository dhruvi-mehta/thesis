console.log(popupBox.style.display);

window.onload = function() {
  alert('fjkds');
  const items = document.querySelectorAll('.perlingrid-item');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const input = prompt("What do you see?");
      if (input) { // only submit if user enters a response
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'submit.php'; // replace with your PHP script URL
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'response';
        hiddenInput.value = input;
        form.appendChild(hiddenInput);
        document.body.appendChild(form);
        form.submit();
      }
    });
  });
};




function toggleVideo(element) {
  const video = element.querySelector('video');
  if (video) {
    if (video.paused) {
      video.style.display = "block";
      video.play();
    } else {
      video.style.display = "none";
      video.pause();
    }
  }
}

const gridItems = document.querySelectorAll('.responsegrid-item');

gridItems.forEach(item => {
  item.addEventListener('click', () => {
    // remove active class from all items
    gridItems.forEach(item => {
      item.classList.remove('active');
    });

    // add active class to clicked item
    item.classList.add('active');

    // toggle video for clicked item
    toggleVideo(item);
  });
});


/// Get the button that opens the pop-up box
var popupBtn = document.getElementById("show-popup-btn");

// Get the pop-up box
var popupBox = document.getElementById("popup-box");

// Get the button that closes the pop-up box


// window.onload = function() {

  var popupBox = document.getElementById('popup-box');
  var closeBtn = document.getElementById("close-btn");

  if(popupBox.style.display=='block'){
    closeBtn.onclick = function() {
      alert('Close button clicked');
      // popupBox.style.display = "none";
    }
  }
// }

// When the user clicks on the button, open the pop-up box
popupBtn.onclick = function() {
  popupBox.style.display = "block";
}

// When the user clicks on the close button, close the pop-up box


// When the user clicks anywhere outside of the pop-up box, close it
window.onclick = function(event) {
  if (event.target == popupBox) {
    popupBox.style.display = "none";
  }
}

