const tips = document.querySelectorAll('.tip');
const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const customDiv = document.querySelector('#customDiv');
const customPara = document.querySelector('#customDiv span');
const customValue = document.querySelector('#customValue');
const totalAmount = document.querySelector('#tipAmountValue');
const totalPeron = document.querySelector('#totalPersons');
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
            console.log(e.target.lastElementChild);
            e.target.textContent = '';
            
        } else {
            tips.forEach(tip => tip.classList.remove('active'));
            e.target.classList.add('active');
            tipValue = e.target.textContent.replace('%','');
        }
    });
}

// WHEN RECIVING INPUTS
window.addEventListener('input', (evt) => {
    totalAmount.textContent = `$${tipAmount(parseInt(bill.value), parseInt(tipValue), parseInt(people.value))}`;
})

function tipAmount(bill,tip,people) {
    if ( bill > 0 && tip > 0 && people > 0 ) {
        console.log(bill * tip);
        return bill * tip / 100 / people;   
    }
}
function total(bill,tip,people) {
    if  ( bill > 0 && people > 0 )
        return bill/people;
}