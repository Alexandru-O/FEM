const submit = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const para = document.querySelectorAll('.wrap p');

submit.addEventListener('click', () => {
    for (const input of inputs) {
        input.classList.remove('invalid');
        input.nextElementSibling.classList.remove('visible');
        input.nextElementSibling.nextElementSibling.classList.remove('visible');
        
        if (input.validity.valueMissing || input.validity.typeMismatch) {
            input.nextElementSibling.classList.add('visible');
            input.classList.add('invalid');
            input.nextElementSibling.nextElementSibling.classList.add('visible');
        }
    }
})