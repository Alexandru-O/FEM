const btn = document.querySelector('.modal__cta');
const email = document.querySelector('.modal__email');
const errorMessage = document.querySelector('.modal__error');
const validReg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

btn.addEventListener('click', () => {
    if ( email.value.match(validReg))
        errorMessage.classList.toggle('active',false)
    else
        errorMessage.classList.toggle('active',true);
})
