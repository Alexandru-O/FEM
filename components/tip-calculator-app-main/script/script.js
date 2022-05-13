const tips = document.querySelectorAll('.tip');
const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const customDiv = document.querySelector('#customDiv');
const totalAmount = document.querySelector('#tipAmountValue');
const totalPeron = document.querySelector('#totalPersons');
let tipValue = 0;

const customValue = document.createElement('input');
customValue.type='number';
customValue.setAttribute('id','customValue');

customDiv.addEventListener('click', () => {
    customDiv.textContent = '';
    customDiv.appendChild(customValue);
});

for ( const tip of tips ) {
    tip.addEventListener('click' , (e) => {
        tips.forEach(tip => tip.classList.remove('active'));
        e.target.classList.add('active');
        tipValue = e.target.textContent.replace('%','');
    });
}

window.addEventListener('input', (evt) => {
    totalAmount.textContent = `$${tipAmount(parseInt(bill.value), parseInt(tipValue), parseInt(people.value))}`;
})

function tipAmount(bill,tip,people) {
    if ( bill > 0 && tip > 0 && people > 0 ) {
        
        return (bill*top/100)/people;   
    }
}
function total(bill,tip,people) {
    if  ( bill > 0 && tip > 0 )
        return bill/people;
}