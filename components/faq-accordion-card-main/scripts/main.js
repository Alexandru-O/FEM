const questions = document.querySelectorAll('.question');
const cube = document.querySelector('.cube');

for (const question of questions) {
    question.addEventListener('click', () => {
        const divs = document.querySelectorAll('.question');
        for (const div of divs) {
            div.classList.remove('selected');
            div.firstElementChild.classList.remove('rotateArrow');
            div.nextElementSibling.classList.remove('visibleAnswer');
        }
        if (!question.classList.contains('selected')) {
            question.classList.add('selected');
            question.firstElementChild.classList.toggle('rotateArrow');
            question.nextElementSibling.classList.toggle('visibleAnswer');
            // cube.classList.toggle('moveCube');
        }

    })
}