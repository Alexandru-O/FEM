const chart = document.querySelector('.chart');
const totalDiv = document.querySelector('.totalLeft div:nth-of-type(2)');
let totalValue = 0; 

async function getJson(url) {
    const expenses = await fetch(url)
        .then(response => response.json())
        .then(days=> {
            for (let i = 0  ; i < 7 ; i++) {
                totalValue += days[i].amount;   
                Math.max(...days.map(obj => obj.amount))

                const dayDiv = document.createElement('div');
                chart.appendChild(dayDiv);

                // BAR CHART
                const chartDiv = document.createElement('div');
                chartDiv.classList.add('chartDiv');
                if ( days[i].amount == Math.max(...days.map(obj => obj.amount)) )
                    chartDiv.classList.add('max');                
                chartDiv.style.height = (days[i].amount * 3) + 'px';
                dayDiv.appendChild(chartDiv);
                // DAYS
                const textDiv = document.createElement('div');
                textDiv.innerHTML = days[i].day;
                dayDiv.appendChild(textDiv);
            }
            // GET MAX
            
        })
        .catch(console.error);
    totalDiv.textContent = `$${totalValue}`;
    
}

getJson('./data.json');