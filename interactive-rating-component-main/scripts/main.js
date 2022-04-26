const grades = document.querySelectorAll('.grade');
const ratingInfo = document.querySelector('.ratingInfo');
let myGrade = 0;

for (let grade_add of grades) {
    grade_add.addEventListener('click', () => {
        for (let grade_remove of grades) {
            grade_remove.classList.remove('selected');
        }
        grade_add.classList.toggle('selected');
        myGrade = grade_add.textContent;
    })
}

const submitBtn   = document.querySelector('.submit_btn');
const first         = document.querySelector('.show')
const second        = document.querySelector('.hide')

submitBtn.addEventListener('click',() => {
    first.classList.replace('show','hide');
    second.classList.replace('hide','show');
    ratingInfo.textContent = `You selected ${myGrade} out of 5`;
});