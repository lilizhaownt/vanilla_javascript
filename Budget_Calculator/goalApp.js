//the goal app only focus on the functions within the goal container

import setAlert from './alertApp.js'

function setGoal() {

    /***select items***/
    const goalForm = document.querySelector('.goal-form');
    const GoalSubmitBtn = document.getElementById('goal-submit-btn');
    const Goals = document.getElementById('goals')
    const goalOutput = document.querySelector('.goal-output');
    const clearList = document.querySelector('.clear-list');
    
    /**event listeners** */
    goalForm.addEventListener('submit', getInput);

    /**declare variables */
    let editItem;
    let editYes = false;

    /**functions**/
    
    function getInput(e) {

        e.preventDefault();

        //create an unique id for each input

        let id = new Date().getTime().toString();

        let goalsValue = Goals.value;

        if (goalsValue && !editYes) {
            
            createListItem(id, goalsValue);
            //show alert after successful enter
            setAlert(0,"entered success", "alert-success")
            //setback to default
            setBacktoDefault();
            //clear all the input
            clearAll();
           
        } else if (goalsValue && editYes) {
            editItem.innerHTML = goalsValue;
            setAlert(0,"goal changed", "alert-success");
            //edit local storage
            setBacktoDefault(); 
            //clear all the input
            clearAll();
        } else { 
            setAlert(0,"empty value","alert-danger")
        }
             
    }
    
    //activate edit button

    function editGoal(e) {
        //submit button text change
        GoalSubmitBtn.textContent = "edit";
        GoalSubmitBtn.style.background = "gold";

        //set the targeted element for change
        editItem = e.currentTarget.parentElement.previousElementSibling;

        //set input value
        Goals.value = editItem.innerHTML;
        editYes = true;
    }

    //activate delete button
    function deleteGoal(e) {
        
        const eleTarget = e.currentTarget.parentElement.parentElement;

        goalOutput.removeChild(eleTarget);
        
        if (goalOutput.children.length === 0) {
            clearList.style.visibility = "hidden";
        }
        setAlert(0,"goal deleted", "alert-danger");
        setBacktoDefault();
    }
    //set back to default
    function setBacktoDefault() {
        Goals.value = '';
        GoalSubmitBtn.textContent = "submit";
        GoalSubmitBtn.removeAttribute('style');
        editYes = false;
    }
    
     //clear all
    function clearAll() {
        clearList.style.visibility = "visible";
        clearList.addEventListener('click', function () {
            goalOutput.innerHTML = '';
            clearList.style.visibility = "hidden";
            setAlert(0,'list cleared', "alert-danger");
            setBacktoDefault();
        })
    }

    function createListItem(id, goalsValue) {
        
         //add a div class to display goal-list
            const divElement = document.createElement('div');
             //add the class goal-list to divElement

            divElement.classList.add('goal-list');
            
            //add id to goal-list so that we can use it later to list the goals

            const dataID = document.createAttribute('data-id');

            dataID.value = id;

            divElement.setAttributeNode(dataID);
            //add divElement to goalOutput

            divElement.innerHTML = `
            <div class ="goal-item">${goalsValue}</div>
        <div class ="btn-container">
            <span class ="edit-btn">
                <i class ="fas fa-edit"></i>
            </span>
            <span class ="delete-btn">
                <i class = "fas fa-trash"></i>
            </span>
        </div>
          `;
         
            goalOutput.appendChild(divElement);
            
              //select edit and delete buttons and add eventlisteners

            const editBtn = document.querySelectorAll('.edit-btn');
            const deleteBtn = document.querySelectorAll('.delete-btn');
            
            editBtn.forEach(item => { item.addEventListener('click', editGoal) });
            deleteBtn.forEach(item => { item.addEventListener('click', deleteGoal) });  
    }
   
};//<---send of setGoa()

export default setGoal;