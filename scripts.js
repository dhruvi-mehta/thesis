// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onload = function() {
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
