const hamb = document.querySelector('.hamburger');
const headerNav = document.querySelector('.headerNav');
const arrow = document.querySelector('.arrow');
const triangle = document.querySelector('.triangle');

hamb.addEventListener('click', () => {
    arrow.classList.toggle('hidden');
    headerNav.classList.toggle('visibleMenu');
    triangle.classList.toggle('visible');
});
