const menuItems = document.querySelectorAll('.has-submenu>a');

const navbarOpen = document.querySelector('.hamb');
const navbarClose = document.querySelector('.closeIcon');
const navbar = document.querySelector('.navbar');

window.addEventListener('click' , (e) => {

    for (const menuItem of menuItems) {
        menuItem.nextElementSibling.classList.toggle('visible',false);
        menuItem.classList.toggle('arrowUp',false);
    }
    if (e.target.matches('.has-submenu>a')) {
        e.target.classList.toggle('arrowUp');
        e.target.nextElementSibling.classList.toggle('visible');
    }
    
});

navbarOpen.addEventListener('click', () => {
    navbar.classList.toggle('visible');
});

navbarClose.addEventListener('click', () => {
    navbar.classList.toggle('visible');
});


