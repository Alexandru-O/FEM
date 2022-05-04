const submit = document.querySelector('button')
const inputs = document.querySelectorAll('input')

// sumbmit.addEventListener('click', function(e) => {
//     e.preventDefault();
// });

submit.addEventListener('click', () => {
    for (const input of inputs) {
        if (input.validity.typeMismatch) {
            input.nextElementSibling.classList.add('visible');
            input.classList.add('invalid');
            // console.log(input.nextElementSibling);
        }
    }
})