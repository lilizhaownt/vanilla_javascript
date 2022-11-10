/**Compound interest for principal:

P(1+r/n)^(nt) without additional contribution

CI = PMT × {[(1 + r/n)^(nt) - 1] / (r/n)} × (1+r/n) interest earned with aditional contribution monthly
A = the future value of the investment/loan, including interest
P = the principal investment amount (the initial deposit or loan amount)
PMT = the monthly payment
r = the annual interest rate (decimal)
n = the number of times that interest is compounded per unit t
t = the time (months, years, etc) the money is invested or borrowed for
C = (PMT * n)*t;
I = interest earned

*/
import setAlert from './alertApp.js'

function investment() {
    
    //DOM selection
    const investmentForm = document.querySelector('.investment-form');
    const startingAmount = document.getElementById('starting-amount');
    const investmentTime = document.getElementById('investment-time');
    const returnRate = document.getElementById('return-rate');
    const additionalContribution = document.getElementById('additional-contribution');
    const Time = document.getElementById('time');
    const endBalance = document.getElementById('end-balance');
    const totalContribution = document.getElementById('total-contribution');
    const interestEarned = document.getElementById('interest-earned');

    //Event Listener
    investmentForm.addEventListener('submit', getInvestmentInput);
    //functions
    function getInvestmentInput(e) {
        e.preventDefault();
        const P = parseInt(startingAmount.value);
        const t = parseInt(investmentTime.value);
        const r = parseInt(returnRate.value)/100;
        const PMT = parseInt(additionalContribution.value);
        const x = Time.value;
        let n; let rr; 
        let A; let nt;
        let C; let rn;
        let I; let CI;

        if (x === "annual") {
            n = 1;
        }
        if (x === "monthly") {
            n = 12;
        }
        if (x === "biweekly") {
            n = 26;
        }
        if (x === "weekly") {
            n = 52;
        }
    
    //total contribution
        C = (PMT * n)*t;
        totalContribution.value = C + P;

    //interest earned
        nt = n * t;
        rn = r / n;
        rr = 1 + rn;
      // PMT × {[(1 + r/n)^(nt) - 1] / (r/n)} × (1+r/n)
        CI = PMT * ((Math.pow(rr, nt)-1)/rn)*rr
        A = P * (Math.pow(rr, nt)) + CI
        I = A - (C+P);
        endBalance.value = Math.round(A*100)/100;
        interestEarned.value = Math.round(I * 100) / 100;
        //createChart(P,C,I)
        updateChart(P,C,I);
        
    }//<--end of getInvestment()
    
    // create pie chart

    const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['starting amount', 'Additional contribution', 'total interest earned'],
                datasets: [{
                    label: '',
                    data: [1,2,3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align:'start'
            }
        }
    }      
        });
    
    function updateChart(P,C,I) {
        chart.data.datasets[0].data = [P, C, I];
        chart.update();
    }

};//<--end of investment function

export default investment;

