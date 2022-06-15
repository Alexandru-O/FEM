const viewsArr = ['10k','50k','100k','500k','1M'];
const priceArr  = ['8','12','16','24','36'];

const amount = document.querySelector('#amount');
amount.value = 3;
const stepListOpts = document.querySelectorAll('.stepListOpt');
const price = document.querySelector('.price p');
const pageviews = document.querySelector('h4');
const checkbox = document.querySelector('.checkbox');
checkbox.checked = false;
let discount = 0;

checkbox.addEventListener('click', () => {
    if (checkbox.checked)
        discount = 25;
    else
        discount = 0;

    getPrice(discount);
})

amount.addEventListener('input', () => {
    getPrice(discount);
    getPageviews();
});

function getPrice(discount) {
    for (let i = 0 ; i < 5 ; i++ )
        if (stepListOpts[i].value === amount.value) {
            price.innerHTML = `$${priceArr[i] - (priceArr[i] * discount / 100)}.00 <span>/month</span>`;
        }
}

function getPageviews() {
    for (let i = 0 ; i < 5 ; i++ )
        if (stepListOpts[i].value === amount.value) {
            pageviews.textContent = `${viewsArr[i]} PAGEVIEWS`;
        }
}
