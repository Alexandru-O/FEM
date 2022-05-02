const shareBtns = document.querySelectorAll('.shareBtn');
const info1 = document.querySelector('.info1');
const info2 = document.querySelector('.info2');

for (const shareBtn of shareBtns) {
    shareBtn.addEventListener('click', (e) => {
        info1.classList.toggle('hidden');
        info2.classList.toggle('visible');
        shareBtn.classList.toggle('shareActive');
        e.target.parentElement.classList.toggle('bgActive');
    });
}