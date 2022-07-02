const prev = document.querySelector('.arrows__prev');
const next = document.querySelector('.arrow__next');

const testimonial = document.querySelectorAll('.testimonial');

for( var i = 0 ; i < testimonial.length ; i++) {
    testimonial[i].addEventListener('click', (evt) => {
        if ( evt.target.classList.contains('arrows__prev') ) {
            console.log(testimonial[i].classList);
            // this.classList.remove('active');
            // testimonial[i-1].classList.add('active');
        } else if ( evt.target.classList.contains('arrows__next') ) {
            console.log('arrow next');
        }
    });
}