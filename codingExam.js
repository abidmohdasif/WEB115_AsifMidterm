let button = document.getElementById('Button1');
let information = document.getElementById('info');

button.addEventListener("click", function() {
    let loanAmount = Number(prompt('Enter the loan amount: '));
    let downPayment = Number(prompt('Enter the down payment as a percentage of the total loan amount: '));    // down payment
    let calculate1 = downPayment / 100 * loanAmount;
    let remainder = loanAmount - calculate1; // this is the principal amount
    let years = Number(prompt('Enter the number of months for the loan (30 or 15): '));
    if (years == 30 || years == 15) {
        let monthlyPayment = (((0.045 / 12) * remainder) / (1 - Math.pow(1 + (0.045 / 12), (years * -12)))).toFixed(2); 
        // console.log(monthlyPayment)
    
        let interestRate = 4.5;
        let mortgageAmount = (interestRate / 100 * remainder * years); //total mortgage amount
        let totalInterest = mortgageAmount - remainder; //total interest paid
        // console.log(mortgageAmount)
        // console.log(totalInterest)
    
        information.textContent = `The monthly payment is: ${monthlyPayment}`;
        let info2 = document.createElement('p');
        info2.textContent = `The total mortgage amount is: ${mortgageAmount}`;
        let info3 = document.createElement('p');
        info3.textContent = `The total interest paid is: ${totalInterest}`;
        let info4 = document.createElement('p');
        info4.textContent = `The amount of Years is: ${years}`;
        let info5 = document.createElement('p');
        info5.textContent = `The mortgage interest rate is: ${interestRate}%`;
        information.appendChild(info2);
        information.appendChild(info3);
        information.appendChild(info4);
        information.appendChild(info5);

        // Display the monthly mortgage payments and the mortgage loan balance for each month.
        for(let i=0, j=0; i<years*12 ; i++) {
            let monthlyInterest = (0.045 / 12) * remainder;
            let monthlyPrincipal = monthlyPayment - monthlyInterest;
            remainder = remainder - monthlyPrincipal;
            j++;
            let info6 = document.createElement('p');
            info6.textContent = `Month ${j}: Principal: ${monthlyPrincipal.toFixed(2)} Interest: ${monthlyInterest.toFixed(2)} Balance: ${remainder.toFixed(2)}`;
            information.appendChild(info6);

            if (remainder <= 0) {
                let info7 = document.createElement('p');
                info7.textContent = `The loan has been paid off in `;
            }


    }
    }
    else {
        alert('Invalid number of years. Please enter either 30 or 15.');
    }








})
