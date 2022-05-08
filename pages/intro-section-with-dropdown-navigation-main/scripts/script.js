const menuItems = document.querySelectorAll('.has-submenu>a');

const navbarOpen = document.querySelector('.hamb');
const navbarClose = document.querySelector('.closeIcon');
const navbar = document.querySelector('.navbar');


for (const menuItem of menuItems) {
    menuItem.addEventListener('click', () => {
        menuItem.classList.toggle('arrowUp');
        menuItem.nextElementSibling.classList.toggle('visible');
    });
}

navbarOpen.addEventListener('click', () => {
    navbar.classList.toggle('visible');
});

navbarClose.addEventListener('click', () => {
    navbar.classList.toggle('visible');
});

