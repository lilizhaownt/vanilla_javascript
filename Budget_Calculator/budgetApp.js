//import alert app
import setAlert from './alertApp.js'

//focus on the fuctions within the calculator-container

function calculateBudget() {

    //codes for debt-container//
    
    //DOM targets
    const debtForm = document.getElementById('debt-form');
    const Debt = document.getElementById('debt');
    const moneyDebt = document.getElementById('money-debt');
    const debtOutput = document.querySelector('.debt-output');
    const debtOutputTotal = document.getElementById('debt-output-total');
    const debtTotal = document.getElementById('debt-total');
    //EventListeners
    debtForm.addEventListener('submit', getDebtInput);

    //functions
    function getDebtInput(e) {
        e.preventDefault();

        const debtValue = Debt.value;
        const moneydebtValue = moneyDebt.value;

        if (debtValue && moneydebtValue > 0) {
            //outputs debt inputs dynamically
            const debtDiv = document.createElement('div');
            debtDiv.classList.add('debt-list');
            debtDiv.innerHTML =
             `
             <div id ="debt-des">${debtValue}</div>
            <span class="money-output-debt" data-debt =${moneydebtValue}>${moneydebtValue}</span>
            <span type ="button" id = "deleteBTN" class = "debt-delete-btn">
                <i class="fas fa-times"></i>
            </span>
            `;

            debtOutput.appendChild(debtDiv);
            debtOutputTotal.style.visibility = "visible";

            //delete button
            const DebtDeleteBtn = document.querySelectorAll('.debt-delete-btn');
            
            DebtDeleteBtn.forEach(item => {
                item.addEventListener('click', deleteDebt);
            })
            //calculate and display debt total
            calDebtTotal();;

        } else {
            setAlert(1,'missing debt input', "alert-danger");
        }

        //clear inputs
        Debt.value = '';
        moneyDebt.value = '';
    }//<--end fo getDebtInput
    
    function deleteDebt(e) {
        let eleDebt = e.currentTarget.parentElement;
        debtOutput.removeChild(eleDebt);
        calDebtTotal()
        if (debtOutput.children.length === 0) {
            debtOutputTotal.style.visibility = "hidden";
        }
    }
     function calDebtTotal() {
        const MoneyOutputDebt = document.querySelectorAll('.money-output-debt');
        let total =0; let amount = 0;
        MoneyOutputDebt.forEach(function (item) {
            let value = item.dataset.debt;
           
            if (value) {
                amount = parseInt(value);
                total = amount + total;
            }
            debtTotal.value = total;
        })  
    }
    
    //codes for income container//

    //DOM targets
    const incomeForm = document.getElementById('income-form');
    const Income = document.getElementById('income');
    const moneyIncome = document.getElementById('money-income');
    const incomeOutput = document.querySelector('.income-output');
    const incomeOutputTotal = document.getElementById('income-output-total');
    const incomeTotal = document.getElementById('income-total');
    //EventListeners
    incomeForm.addEventListener('submit', getIncomeInput);

    //functions
    function getIncomeInput(e) {
        e.preventDefault();

        const incomeValue = Income.value;
        const moneyIncomeValue = moneyIncome.value;

        if (incomeValue && moneyIncomeValue > 0) {
            //outputs debt inputs dynamically
            const incomeDiv = document.createElement('div');
            incomeDiv.classList.add('income-list');
            incomeDiv.innerHTML =
             `
            <div class ="income-des">${incomeValue}</div>
            <span class = "money-output-income" data-income =${moneyIncomeValue}>${moneyIncomeValue}</span>
            <span type ="button" id = "deleteBTN" class = "income-delete-btn">
                <i class="fas fa-times"></i>
            </span>
             
            `;

            incomeOutput.appendChild(incomeDiv);
            incomeOutputTotal.style.visibility = "visible";

            //delete button
            const IncomeDeleteBtn = document.querySelectorAll('.income-delete-btn');
            
            IncomeDeleteBtn.forEach(item => {
                item.addEventListener('click', deleteIncome);
            })
            //calculate and display debt total
            calIncomeTotal();

        } else {
            setAlert(2,'missing income input', "alert-danger");
        }

        //clear inputs
        Income.value = '';
        moneyIncome.value = '';
    }//<--end fo getIncomeInput
    
    function deleteIncome(e) {
        let eleIncome = e.currentTarget.parentElement;
        incomeOutput.removeChild(eleIncome);
        calIncomeTotal()
        if (incomeOutput.children.length === 0) {
            incomeOutputTotal.style.visibility = "hidden";
        }
    }
     function calIncomeTotal() {
        const MoneyOutputIncome = document.querySelectorAll('.money-output-income');
        let total =0; let amount = 0;
        MoneyOutputIncome.forEach(function (item) {
            let value = item.dataset.income;
           
            if (value) {
                amount = parseInt(value);
                total = amount + total;
            }
            incomeTotal.value = total;
        })  
    }

//codes for expense container//

    //DOM targets
    const expenseForm = document.getElementById('expense-form');
    const Expense = document.getElementById('expense');
    const moneyExpense = document.getElementById('money-expense');
    const expenseOutput = document.querySelector('.expense-output');
    const expenseOutputTotal = document.getElementById('expense-output-total');
    const expenseTotal = document.getElementById('expense-total');
    //EventListeners
    expenseForm.addEventListener('submit', getExpenseInput);

    //functions
    function getExpenseInput(e) {
        e.preventDefault();

        const expenseValue = Expense.value;
        const moneyExpenseValue = moneyExpense.value;

        if (expenseValue && moneyExpenseValue > 0) {
            //outputs debt inputs dynamically
            const expenseDiv = document.createElement('div');
            expenseDiv.classList.add('expense-list');
            expenseDiv.innerHTML =
             `
             <div class ="expense-des">${expenseValue}</div>
            <span id ="money-output" class ="money-output-expense" data-expense =${moneyExpenseValue}>${moneyExpenseValue}</span>
            <span type ="button" id = "deleteBTN" class = "expense-delete-btn">
                <i class="fas fa-times"></i>
            </span>
            `;

            expenseOutput.appendChild(expenseDiv);
            expenseOutputTotal.style.visibility = "visible";

            //delete button
            const ExpenseDeleteBtn = document.querySelectorAll('.expense-delete-btn');
            
            ExpenseDeleteBtn.forEach(item => {
                item.addEventListener('click', deleteExpense);
            })
            //calculate and display debt total
            calExpenseTotal();

        } else {
            setAlert(3,'missing expense input', "alert-danger");
        }

        //clear inputs
        Expense.value = '';
        moneyExpense.value = '';
    }//<--end fo getIncomeInput
    
    function deleteExpense(e) {
        let eleExpense = e.currentTarget.parentElement;
        expenseOutput.removeChild(eleExpense);
        calExpenseTotal()
        if (expenseOutput.children.length === 0) {
            expenseOutputTotal.style.visibility = "hidden";
        }
    }
     function calExpenseTotal() {
        const MoneyOutputExpense = document.querySelectorAll('.money-output-expense');
        let total =0; let amount = 0;
        MoneyOutputExpense.forEach(function (item) {
            let value = item.dataset.expense;
           
            if (value) {
                amount = parseInt(value);
                total = amount + total;
            }
            expenseTotal.value = total;
        })  
    }
//codes for budget goal and summary container//

    //DOM targets
    const budgetForm = document.querySelector('.budget-form');
    const budgetExpense = document.getElementById('budget-expense');
    const budgetDebt = document.getElementById('budget-debt');
    const budgetSaving = document.getElementById('budget-saving');
    const expenseAllocation = document.getElementById('expense-allocation');
    const debtAllocation = document.getElementById('debt-allocation');
    const savingAllocation = document.getElementById("saving-allocation");
    const beginDebt = document.getElementById('begin-debt');
    const remainDebt = document.getElementById('remain-debt');
    const emergencySaving = document.getElementById('emergency-saving');

    //Event listener
    budgetForm.addEventListener('submit', getBudgetInput);

    //function
    function getBudgetInput(e) {
        e.preventDefault();

        const budgetExpenseValue = budgetExpense.value;
        const budgetDebtValue = budgetDebt.value;
        const budgetSavingValue = budgetSaving.value;

        if (budgetExpenseValue > 0 && budgetDebtValue > 0 && budgetSavingValue > 0) {

            const expenseAl = budgetExpenseValue / 100;
            const debtAl = budgetDebtValue / 100;
            const savingAl = budgetSavingValue / 100;

            //display values in summary
            expenseAllocation.value = expenseAl * incomeTotal.value;
            debtAllocation.value = debtAl * incomeTotal.value;
            savingAllocation.value = savingAl * incomeTotal.value;

            beginDebt.value = debtTotal.value;
            remainDebt.value = beginDebt.value - debtAllocation.value;

            emergencySaving.value = expenseTotal.value * 13;

        } else {
            setAlert(4,"no budget goal input", "alert-danger")
        }
    
        //input type ="number" returns a string value above 1000.  parseInt function to ensure all inputs are coverted to integer for comparison.

        let x = parseInt(expenseTotal.value);
        let y = parseInt(expenseAllocation.value);
            
        if (x > y) {
            setAlert(5, "expense exceeded budget!", "alert-danger");
                
            }
        else { 
            setAlert(5, "budget met", "alert-success");

            }
    }
//reset buttons
    const Recalculate = document.getElementById('re-calculate');
    const reset = document.getElementById('reset-calculator');

    Recalculate.addEventListener('click', getBudgetInput);
    reset.addEventListener('click', function () {
        //clear the debt-container
        debtOutput.innerHTML = '';
        debtOutputTotal.style.visibility = "hidden";
        //clear the income container
        incomeOutput.innerHTML = '';
        incomeOutputTotal.style.visibility = "hidden";
        //clear the expense container
        expenseOutput.innerHTML = '';
         expenseOutputTotal.style.visibility = "hidden";
        //clear buget-container input
        budgetExpense.value = "";
        budgetDebt.value ="";
        budgetSaving.value = "";
        //clear the summary container
       
        expenseAllocation.value = '';
        debtAllocation.value = '';
        savingAllocation.value = '';
        beginDebt.value = '';
        remainDebt.value = '';
        emergencySaving.value = '';
    })

}//<--end of calculateBudget function;

export default calculateBudget;