const grades = document.querySelectorAll('.grade')

for (const grade of grades) {
    grade.addEventListener('click', () => {
        grade.classList.toggle('selected');
    })
}