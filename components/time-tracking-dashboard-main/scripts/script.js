const daily = document.querySelector('.period span:nth-of-type(1)');
const weekly = document.querySelector('.period span:nth-of-type(2)');
const monthly = document.querySelector('.period span:nth-of-type(3)');

const periods = document.querySelectorAll('.period span');

const workCurrent = document.querySelectorAll('.blueContainer div:nth-of-type(3)');
const workPrevious = document.querySelectorAll('.blueContainer div:nth-of-type(4)');

async function getInfo(type) {
    await fetch('./data.json')
            .then( async response => response.json() )
            .then( json => displayInfo(json,type) )
            .catch(error => console.error(`Error fetching data: ${error.message}`) );
}

function displayInfo (obj,type) {
    for ( let i = 0 ; i < 6 ; i++ ) {
        workCurrent[i].textContent = obj[i].timeframes[type].current + 'hrs';
        workPrevious[i].textContent = `Previous - ${obj[i].timeframes[type].previous  + 'hrs'}`;
    }
}

for ( const period of periods ) {
    period.addEventListener('click', (e) => {
        periods.forEach( period => period.classList.remove('active'));
        e.target.classList.add('active');
        getInfo(e.target.textContent.toLowerCase());
    });
}



