// console.log('hi');

var button = document.querySelector('#navbar-toggle');
var navMenuMobile = document.querySelector('.nav-menu.--mobile');
var navMenuDesktop = document.querySelector('.nav-menu.--large');
var bodyOverlay = document.querySelector('.body-overlay');
var navTriangle = button.querySelector('.triangle')

var dropdownBtn = document.querySelector('.navbar-header .dropdown-menu .button')
var dropdown = document.querySelector('.navbar-header .dropdown-menu .dropdown')

// Mobile Menu Scripts =========================================================

// Close Mobile Menu
function closeMobileMenu() {
  navMenuMobile.style.maxHeight = null;
  navMenuMobile.style.pointerEvents = 'none';
  bodyOverlay.style.opacity = 0;
  document.querySelector('body').style.overflow = 'unset';
  bodyOverlay.style.pointerEvents = 'none';
  navTriangle.style.display = 'none';
}

// Open Mobile Menu
function openMobileMenu() {
  navMenuMobile.style.pointerEvents = 'all';
  navMenuMobile.style.maxHeight = navMenuMobile.scrollHeight + "px";
  bodyOverlay.style.opacity = 0.8;
  bodyOverlay.style.pointerEvents = 'all';
  document.querySelector('body').style.overflow = 'hidden';
  navTriangle.style.display = 'flex';
}

// Open/Close menu on burger icon click
button.addEventListener('click', function(){
  if (navMenuMobile.style.maxHeight) {
    closeMobileMenu()
  } else {
    openMobileMenu()
  }
})

// Close open menu when clicking outside of menu on body overlay element
bodyOverlay.addEventListener('click', function() {
  if (navMenuMobile.style.maxHeight) {
    closeMobileMenu()
  }
})


// Tablet Menu Scripts =========================================================


// Open Dropdown menu on burger click (Tablet Screen)
dropdownBtn.addEventListener('click', function() {
  dropdown.classList.toggle('--open')
})

// When menu items > 5, move excess items to dropdown (for larger menus)
function moveLinkToDropdown() {

  var items = navMenuDesktop.querySelector('.item').children;

  var excessItems = [];

  // If items in menu are greater than 5 or dropdown is populated
  if (items.length > 5 || dropdown.children.length > 1) {

    console.log('more than 5');
    // dropdownBtn.style.border = '5px solid green';

    // Loop over 6th + items and push to empty array
    for (var i = 5; i < items.length; i++) {
      excessItems.push(items[i])
    }

    // Append each item from new array into Dropdown element
    excessItems.forEach(function(el, i){
      dropdown.appendChild(el)
    })

    // Make sure dropdown button is visible
    dropdownBtn.style.display = 'flex';

  // Hide dropdown button if less than 5 items or no child elements in dropdown
  } else {
    dropdownBtn.style.display = 'none';
  }
}


// Return dropdown items to menu. For rare case of desktop framewidth resize
function moveLinkToMenu() {
  var items = dropdown.children;

  var returnToMenu = []

  // Find all items in dropdown (excluding triangle el)
  for (var i = 1; i < items.length; i++) {
    returnToMenu.push(items[i])
  }

  // Append each item back to menu
  returnToMenu.forEach(function(el, i) {
    navMenuDesktop.querySelector('.item').appendChild(el)
  })
}


// Document ready, check window framewidth and apply correct function
if (window.innerWidth >= 767 && window.innerWidth <= 1023) {
  moveLinkToDropdown()
} else {
  moveLinkToMenu()
}

// Apply functions on framewidth resize
window.addEventListener('resize', function() {

  if (window.innerWidth >= 767 && window.innerWidth <= 1023) {
    moveLinkToDropdown()
  } else {
    moveLinkToMenu()
  }

})
