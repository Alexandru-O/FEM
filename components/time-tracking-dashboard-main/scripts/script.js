const daily = document.querySelector('.period span:nth-of-type(1)');
const weekly = document.querySelector('.period span:nth-of-type(2)');
const monthly = document.querySelector('.period span:nth-of-type(3)');

async function getInfo() {
    await fetch('./data.json')
            .then( async response => response.json() )
            .then( json => displayInfo(json) )
            .catch(error => console.error(`Error fetching data: ${error.message}`) );
}

function displayInfo (obj) {
    console.log(obj[0].title);
}

getInfo();


