const para = document.querySelector('p');
const randomBtn = document.querySelector('#randomBtn');
const h = document.querySelector('h6');

const req = new Request('https://api.adviceslip.com/advice');

// sa incerc sa o fac async

async function getAdvice() {
    // const response = await fetch(req);
    // const json = await response.json();
    
    // displayAdvice(json.slip);

    await fetch(req)
            .then( async response => await response.json() )
            .then( json => displayAdvice(json.slip) )
            .catch(error => console.error(`Error fetching data: ${error.message}`) );
}

function displayAdvice(obj) {
    para.textContent = `${obj.advice}`;
    h.textContent = `ADVICE #${obj.id}`;
}

randomBtn.addEventListener('click', getAdvice);