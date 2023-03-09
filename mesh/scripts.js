console.log('connected');

let popupEl = document.querySelector("#popup-form");
const video = document.querySelector("#my-video"); 
console.log(video);

video.addEventListener("click", () => {
  // Display the form element
  popupEl.classList.toggle("hidden");
});





// // Get the button:
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// // function scrollFunction() {
// //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// //     mybutton.style.display = "block";
// //   } else {
// //     mybutton.style.display = "none";
// //   }
// // }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }



// // Get the video element and the form element
// const video = document.getElementById("my-video");
// const form = document.getElementById("popup-form");

// // Add an event listener to the video element
// video.addEventListener("click", () => {
//   // Display the form element
//   form.classList.remove("hidden");
// });


// // Get all the form elements
// const forms = document.querySelectorAll('.feedback-form');

// // Loop through the forms and add a submit event listener to each one
// forms.forEach((form) => {
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const feedback = form.querySelector('input[type="text"]').value;
//     const videoId = form.querySelector('input[type="hidden"]').value;
//     // send feedback data to the server using Ajax or fetch API
//     // hide the form after submitting feedback
//     form.style.display = 'none';
//   });

//   // add click event listener to the form's submit button
//   const submitButton = form.querySelector('input[type="submit"]');
//   submitButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     const feedback = form.querySelector('input[type="text"]').value;
//     const videoId = form.querySelector('input[type="hidden"]').value;
//     // send feedback data to the server using Ajax or fetch API
//     // hide the form after submitting feedback
//     form.style.display = 'none';
//   });
// });

