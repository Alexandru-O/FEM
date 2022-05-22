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
let tipPersonValue = 0;

// CUSTOM TIP VALUE
// customDiv.addEventListener('click', () => {
//     customPara.classList.toggle('hidden');
//     customValue.classList.toggle('visible');
//     customPara.classList.remove('active');
// });

for ( const tip of tips ) {
    tip.addEventListener('click' , (e) => {
        if ( e.target.id == 'customDiv' ) {
            e.target.firstChild.textContent = '';
            e.target.lastElementChild.addEventListener('keydown', (evt) => {
                if ( evt.key == 'Escape') {
                    customValue.classList.toggle('visible',false);
                    e.target.firstChild.textContent = 'Custom';
                }
            });
            customValue.addEventListener('input', () => {
                tipValue = customValue.value;
            });

            customValue.classList.toggle('visible');
        } else {
            tips.forEach(tip => tip.classList.remove('active'));
            e.target.classList.add('active');
            tipValue = e.target.textContent.replace('%','');
            tipAmount();
            total();
        }
    });
}

// WHEN RECIVING INPUTS
window.addEventListener('input', (evt) => {
    tipAmount();
    total();
});

// RESET 
resetBtn.addEventListener('click', () => {
    reset();
});

function tipAmount() {
    if ( bill.value > 0 && tipValue > 0 && people.value > 0 ) {
        totalAmount.textContent = `$${(parseFloat(bill.value) * parseFloat(tipValue) / 100 / parseFloat(people.value)).toFixed(2)}`;
        tipPersonValue = (parseFloat(bill.value) * parseFloat(tipValue) / 100 / parseFloat(people.value)).toFixed(2);
    } else {
        totalAmount.textContent = '$0.00';
    }
}
function total() {
    if  ( bill.value > 0 && people.value > 0 ) {
        totalPerson.textContent = `$${(parseFloat(bill.value) / parseFloat(people.value) + parseFloat(tipPersonValue) ).toFixed(2)}`;
    } else {
        totalPerson.textContent = '$0.00';
    }
}
function reset() {
    bill.value = '';
    tips.forEach(tip => tip.classList.remove('active'));
    people.value = '';
    customValue.value = '';
    totalAmount.textContent = '$0.00';
    totalPerson.textContent = '$0.00';
}