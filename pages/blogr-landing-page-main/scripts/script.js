const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.headerNav');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownsContent = document.querySelectorAll('.dropdownContent');

hamb.addEventListener('click', () => {
    nav.classList.toggle('active');
});

for (const dropdown of dropdowns) {
    dropdown.addEventListener('click', (e) => {
        e.target.parentNode.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('open');
    });
}