const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.headerNav');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownsContent = document.querySelectorAll('.dropdownContent');

hamb.addEventListener('click', () => {
    nav.classList.toggle('active');
});

for (const dropdown of dropdowns) {
    dropdown.addEventListener('click', (e) => {
        // dropdowns.forEach( (e) => console.log(e.nextElementSibling.classList.remove('open')));
        e.target.parentNode.nextElementSibling.classList.toggle('open');
    });
}