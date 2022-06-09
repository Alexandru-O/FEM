// open menu on hamb press
const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const greyWrap = document.querySelector('.greyWrap');

hamb.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('dimBackground');
});


// open back this project window
const modal = document.querySelector('.modal');
const backThisProject = document.querySelector('.buttons button');
backThisProject.addEventListener('click', () => {
    modal.classList.toggle('active');
    greyWrap.classList.toggle('active',true);
});

// if one backing opt. is selected then: 
//      -> make green border on selected and remove green border from others
//      -> open bottom part with amount and continue
const radioBtns = document.querySelectorAll('.pledgeCheck');

for (const radioBtn of radioBtns) {
    radioBtn.addEventListener('click' , (evt) => {
        radioBtns.forEach(radioBtn => {
            radioBtn.parentNode.parentNode.parentNode.classList.remove('greenBorder');
            radioBtn.parentNode.parentNode.nextElementSibling.classList.remove('active'); 
            radioBtn.parentNode.parentNode.nextElementSibling.nextElementSibling.classList.remove('active');     
        });
        evt.target.parentNode.parentNode.parentNode.classList.add('greenBorder');
        evt.target.parentNode.parentNode.nextElementSibling.classList.add('active'); 
        evt.target.parentNode.parentNode.nextElementSibling.nextElementSibling.classList.add('active'); 
    });
}

const closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    greyWrap.classList.remove('active');
}); 


    
