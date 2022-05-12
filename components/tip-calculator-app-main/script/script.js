const tips = document.querySelectorAll('.tip');
const bill = document.querySelector('#bill');
const people = document.querySelector('#people');

for ( const tip of tips ) {
    tip.addEventListener('click' , (e) => {
        tips.forEach(tip => tip.classList.remove('active'));
        e.target.classList.add('active')
    });
}