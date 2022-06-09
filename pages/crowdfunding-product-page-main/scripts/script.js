const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const radioBtns = document.querySelectorAll('.pledgeCheck');

const modal = document.querySelector('.modal');
const backThisProject = document.querySelector('.buttons button');

hamb.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('dimBackground');
});

backThisProject.addEventListener('click', () => {
    modal.classList.toggle('active');
});

for (const radioBtn of radioBtns) {
    radioBtn.addEventListener('click' , (evt) => {
        radioBtns.forEach(radioBtn => {
            radioBtn.parentNode.parentNode.parentNode.classList.remove('greenBorder');
        });
        evt.target.parentNode.parentNode.parentNode.classList.toggle('greenBorder');
    });
}