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

console.log('connected');


let popupEl = document.querySelector("#popup-form");
let popupEl2 = document.querySelector("#popup-form-2");
let popupEl3 = document.querySelector("#popup-form-3");
let popupEl4 = document.querySelector("#popup-form-4");
let popupEl5 = document.querySelector("#popup-form-5");
let popupEl6 = document.querySelector("#popup-form-6");
let popupEl7 = document.querySelector("#popup-form-7");
let popupEl8 = document.querySelector("#popup-form-8");
let popupEl9 = document.querySelector("#popup-form-9");
let popupEl10 = document.querySelector("#popup-form-10");
let popupEl11 = document.querySelector("#popup-form-11");
let popupEl12 = document.querySelector("#popup-form-12");
let popupEl13 = document.querySelector("#popup-form-13");
let popupEl14 = document.querySelector("#popup-form-14");
let popupEl15 = document.querySelector("#popup-form-15");
let popupEl16 = document.querySelector("#popup-form-16");
let popupEl17 = document.querySelector("#popup-form-17");
let popupEl18 = document.querySelector("#popup-form-18");
let popupEl19 = document.querySelector("#popup-form-19");
let popupEl20 = document.querySelector("#popup-form-20");
let popupEl21 = document.querySelector("#popup-form-21");


const video = document.querySelector("#my-video"); 
const video2 = document.querySelector("#my-video-2"); 
const video3 = document.querySelector("#my-video-3"); 
const video4 = document.querySelector("#my-video-4"); 
const video5 = document.querySelector("#my-video-5");
const video6 = document.querySelector("#my-video-6"); 
const video7 = document.querySelector("#my-video-7"); 
const video8 = document.querySelector("#my-video-8");
const video9 = document.querySelector("#my-video-9");
const video10 = document.querySelector("#my-video-10");
const video11 = document.querySelector("#my-video-11");
const video12 = document.querySelector("#my-video-12");
const video13 = document.querySelector("#my-video-13");
const video14 = document.querySelector("#my-video-14");
const video15 = document.querySelector("#my-video-15");
const video16 = document.querySelector("#my-video-16");
const video17 = document.querySelector("#my-video-17");
const video18 = document.querySelector("#my-video-18");
const video19 = document.querySelector("#my-video-19");
const video20 = document.querySelector("#my-video-20");
const video21 = document.querySelector("#my-video-21");

console.log(video);

video.addEventListener("click", () => {
  // Display the form element
  popupEl.classList.toggle("hidden");
});

video2.addEventListener("click",() => {
 popupEl2.classList.toggle("hidden");
});

video3.addEventListener("click",() => {
 popupEl3.classList.toggle("hidden");
});

video4.addEventListener("click",() => {
 popupEl4.classList.toggle("hidden");
});

video5.addEventListener("click",() => {
 popupEl5.classList.toggle("hidden");
});

video6.addEventListener("click",() => {
 popupEl6.classList.toggle("hidden");
});

video7.addEventListener("click",() => {
 popupEl7.classList.toggle("hidden");
});

video8.addEventListener("click",() => {
 popupEl8.classList.toggle("hidden");
});

video9.addEventListener("click",() => {
 popupEl9.classList.toggle("hidden");
});

video10.addEventListener("click",() => {
 popupEl10.classList.toggle("hidden");
});

video11.addEventListener("click",() => {
 popupEl11.classList.toggle("hidden");
});

video12.addEventListener("click",() => {
 popupEl12.classList.toggle("hidden");
});

video13.addEventListener("click",() => {
 popupEl13.classList.toggle("hidden");
});

video14.addEventListener("click",() => {
 popupEl14.classList.toggle("hidden");
});

video15.addEventListener("click",() => {
 popupEl15.classList.toggle("hidden");
});

video16.addEventListener("click",() => {
 popupEl16.classList.toggle("hidden");
});

video17.addEventListener("click",() => {
 popupEl17.classList.toggle("hidden");
});

video18.addEventListener("click",() => {
 popupEl18.classList.toggle("hidden");
});

video19.addEventListener("click",() => {
 popupEl19.classList.toggle("hidden");
});

video20.addEventListener("click",() => {
 popupEl20.classList.toggle("hidden");
});

video21.addEventListener("click",() => {
 popupEl21.classList.toggle("hidden");
});


