const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const menu = document.querySelector('.header__menu');
const close = document.querySelectorAll('.has-fade');

// Toggle menu function
function toggleMenu() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('noscroll');

    close.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });

    // Remove click event listener
    document.removeEventListener('click', handleBodyClick);
  } else {
    header.classList.add('open');
    body.classList.add('noscroll');

    close.forEach(function(element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

    // Add click event listener
    document.addEventListener('click', handleBodyClick);
  }
}

// Hamburger menu click event
btnHamburger.addEventListener('click', function(event) {
  event.stopPropagation();
  toggleMenu();
});

// Handle body click
function handleBodyClick(event) {
  if (header.classList.contains('open') && !menu.contains(event.target) && event.target !== btnHamburger) {
    toggleMenu();
  }
}

// Close menu on escape key press
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && header.classList.contains('open')) {
    toggleMenu();
  }
});

// og code
// //hamburger menu icon open&close on click function
// const btnHamburger = document.querySelector('#btnHamburger');
// const header = document.querySelector('.header');
// const body = document.querySelector('body');
// const menu = document.querySelector('.header__menu');
// const close = document.querySelectorAll('.has-fade');


// btnHamburger.addEventListener('click', function() {

//     if(header.classList.contains('open')) { //close hamburger menu
//         header.classList.remove('open');
//         body.classList.remove('noscroll');

//         close.forEach(function(element){
//                         element.classList.remove('fade-in');
//                         element.classList.add('fade-out');
//                     });

                 
//     }
    
    
//     else { //open hamburger menu
//         header.classList.add('open');
//         body.classList.add('noscroll');
//         close.forEach(function(element){
//                         element.classList.remove('fade-out');
//                         element.classList.add('fade-in');
//                     });
        
//     }

// });