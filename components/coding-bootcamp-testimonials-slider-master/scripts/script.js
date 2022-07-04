const prev = document.querySelector('.arrows__prev');
const next = document.querySelector('.arrow__next');

const testimonial = document.querySelectorAll('.testimonial');

// foreach testimonial we set a listener and check if we click on prev or next
for( let i = 0 ; i <= testimonial.length-1 ; i++) {
    testimonial[i].addEventListener('click', (evt) => {
        let n = i;
        //if we press on PREV arrow
        if ( evt.target.classList.contains('arrows__prev') ) {
            //check if item is the most left one on the list
            //if so, then we should slide to the last item on the list
            if ( i == 0 )
                n = testimonial.length-1;
            else
                n = i - 1;   
            slide(n,i);
        //if we press NEXT arrow
        } else if ( evt.target.classList.contains('arrows__next') ) {
            //check if item is the last on the list
            //if so, then we should slide to the first item on the list
            if ( i == testimonial.length-1)
                n = 0;
            else
                n = i + 1;
            slide(n,i);
        }
    });
}

//add or remove ACTIVE class
function slide(n,i) {
    testimonial[n].classList.add('active');
    testimonial[i] .classList.remove('active'); 
}