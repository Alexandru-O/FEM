const email = document.querySelector('#email');
const button = document.querySelector('button');
const p = document.querySelector('.invalidEmailText');
const icon = document.querySelector('.invalidEmailIcon');

// button.addEventListener('click', () => {
//     p.classList.remove('visible');
//     icon.classList.remove('visible');
//     if (email.validity.typeMismatch){
//         console.log('invalid');
//         p.classList.add('visible');
//         icon.classList.add('visible');
//     }
// });

email.addEventListener('input', () => {
    p.classList.remove('visible');
    icon.classList.remove('visible');
    if (email.validity.typeMismatch){
        console.log('invalid');
        p.classList.add('visible');
        icon.classList.add('visible');
    }
});