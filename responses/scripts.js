console.log('connected');

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



