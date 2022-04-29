const questions = document.querySelectorAll('.question');

for (const question of questions) {
    question.addEventListener('click', () => {
        const divs = document.querySelectorAll('.question');
        for (const div of divs) {
            div.classList.remove('bold');
            div.firstElementChild.classList.remove('rotateArrow');
            div.nextElementSibling.classList.remove('visibleAnswer');
        }
        question.classList.add('bold');
        question.firstElementChild.classList.toggle('rotateArrow');
        question.nextElementSibling.classList.toggle('visibleAnswer');
    })
}