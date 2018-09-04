// console.log('hi');

var button = document.querySelector('#navbar-toggle');
var navMenu = document.querySelector('.nav-menu');
var bodyOverlay = document.querySelector('.body-overlay');

// console.log(button);

button.addEventListener('click', function(){
  // console.log(true);

  if (navMenu.style.maxHeight) {
    navMenu.style.maxHeight = null;
    bodyOverlay.style.opacity = 0;
  } else {
    navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    bodyOverlay.style.opacity = 0.8;
  }
})
