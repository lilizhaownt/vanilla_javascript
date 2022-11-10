/**Flash card challenge
 * 1) Gather data from forms
 * 2) Do the calculation
 * 3) Display the accuracy rate
 * 4) Repeat random number generation based on request
 */

const Operations = document.getElementById('operations');
const Digits = document.getElementById('digits');
const Quantity = document.getElementById('quantity');

//gather the selected options from the forms

[Operations, Digits, Quantity].forEach(item => {
    item.addEventListener('change', () => {
        
        //get the math symbol
        const selectedOperation = Operations.value;
        
        let mathSymbol;
        if (selectedOperation === "addition") {
            mathSymbol = "+";
        }
        else if (selectedOperation === "subtraction") {
            mathSymbol = "-";
        }
        else if (selectedOperation === "multiplication") {
            mathSymbol = "x";
        }
        else if (selectedOperation === "division") {
            mathSymbol = "÷";
        } else {
            mathSymbol = "+"
        }

        //get the digits and quantity pass them into displayProblem()
        const selectedDigit = Digits.value; 
        const selectedQuantity = Quantity.value;

        displayProblem(mathSymbol, selectedDigit, selectedQuantity);
    })
});

//select from the display container to display problem

const Num1 = document.getElementById("num1");
const Operation = document.getElementById('operation');
const Num2 = document.getElementById("num2");
const submit = document.getElementById('equals');
const Answer = document.getElementById('answer');
const YourAns = document.getElementById("yourAns");

function displayProblem(mathSymbol, selectedDigit, selectedQuantity) {
   
    Operation.innerHTML = mathSymbol;
    //pass the numbers
    let N1, N2;
    function random() {
    
        if (selectedDigit === "single") {
            N1 = Math.floor(Math.random() * 10);
            N2 = Math.floor(Math.random() * 10);
        }
        else if (selectedDigit === "double") {
            N1 = Math.floor(Math.random() * 100);
            N2 = Math.floor(Math.random() * 100);
        }
        else if (selectedDigit === "triple") {
            N1 = Math.floor(Math.random() * 1000);
            N2 = Math.floor(Math.random() * 1000);
        } else {
            N1 = 0;
            N2 = 0;
        }
        Num1.innerHTML = N1;
        Num2.innerHTML = N2;
    }
    random();

    //function to control the number of times random() is activated by submit button
    let i = 0;

    submit.addEventListener('click', () => {
        i++;
        displayAnswer(mathSymbol, N1, N2, Answer.value,i);
            if (i <= selectedQuantity) {
                random();
                YourAns.innerHTML = Answer.value;
            } else {
                YourAns.innerHTML = "FINISHED!"
            } 
    })
}
//link the Enter key to the submit button
Answer.addEventListener('keyup', function (e) {

    if (e.keyCode === 13) {
        submit.click();
        Answer.value = '';
    }
})
//clear the input field onmouseover
function clearAns(answer) {
    answer.value = '';
}

/****Display the answers****/

const ANS = document.getElementById("ans");
const Percentage = document.getElementById("percentage");

function displayAnswer(mathSymbol, N1, N2,yourANS,i) {
      
    //display the answer
    let result;

    switch (mathSymbol) {
        case "+":
            result = N1 + N2;
            break;
        case "-":
            result = N1 - N2;
            break;
        case "x":
            result = N1 * N2;
            break;
        case "÷":
            result = Math.round((N1 / N2) * 100) / 100;
            break;
        default:
            result = 0;
            break;
    }

    ANS.innerHTML = result;

    //display correct answer %

    let answer = parseInt(yourANS);

    correct(result,answer,i);
}
let count = 0; 
function correct(result, answer,i) {
    
    if (result === answer) {
        count++
    }   
    Percentage.innerHTML = Math.round(((count/i)*100)*100/100);
    }

//reset the form when user finish problems;

const Reset = document.getElementById('reset');

Reset.addEventListener('click', function () {
    location.reload();
})