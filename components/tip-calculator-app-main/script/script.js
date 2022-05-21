const tips = document.querySelectorAll('.tip');
const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const customDiv = document.querySelector('#customDiv');
const customPara = document.querySelector('#customDiv span');
const customValue = document.querySelector('#customValue');
const totalAmount = document.querySelector('#tipAmountValue');
const totalPerson = document.querySelector('#totalPersons');
const resetBtn = document.querySelector('#resetBtn');
let tipValue = 0;

// CUSTOM TIP VALUE
// customDiv.addEventListener('click', () => {
//     customPara.classList.toggle('hidden');
//     customValue.classList.toggle('visible');
//     customPara.classList.remove('active');
    
// });

for ( const tip of tips ) {
    tip.addEventListener('click' , (e) => {
        if ( e.target.id == 'customDiv' ) {
            e.target.textContent = '';
        } else {
            tips.forEach(tip => tip.classList.remove('active'));
            e.target.classList.add('active');
            tipValue = e.target.textContent.replace('%','');
            tipAmount();
        }
    });
}

// WHEN RECIVING INPUTS
window.addEventListener('input', (evt) => {
    tipAmount();
});

// RESET 
resetBtn.addEventListener('click', () => {
    reset();
});

function tipAmount() {
    console.log(bill.value);
    if ( bill.value > 0 && tipValue > 0 && people.value > 0 ) {
        totalAmount.textContent = `$${parseInt(bill.value) * parseInt(tipValue) / 100 / parseInt(people.value)}`;
    } else {
        totalAmount.textContent = '$0.00';
    }
}
function total(bill,tip,people) {
    if  ( bill > 0 && people > 0 )
        return bill/people;
}
function reset() {
    bill.value = '';
    tips.forEach(tip => tip.classList.remove('active'));
    people.value = '';
    totalAmount.textContent = '$0.00';
    totalPerson.textContent = '$0.00';
}