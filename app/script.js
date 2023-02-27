//hamburger menu icon open&close on click function
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const menu = document.querySelector('.header__menu');
const close = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function() {

    if(header.classList.contains('open')) { //close hamburger menu
        header.classList.remove('open');
        body.classList.remove('noscroll');

        close.forEach(function(element){
                        element.classList.remove('fade-in');
                        element.classList.add('fade-out');
                    });

                 
    }
    
    
    else { //open hamburger menu
        header.classList.add('open');
        body.classList.add('noscroll');
        close.forEach(function(element){
                        element.classList.remove('fade-out');
                        element.classList.add('fade-in');
                    });
        
    }

});