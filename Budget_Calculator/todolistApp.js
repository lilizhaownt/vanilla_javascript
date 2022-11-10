//the goal app only focus on the functions within the goal container

//Here we will use localstorage (which store the information on your computer until you delete it).  This will allow your app to save the data that you wanted save.

//this is a copy-and-paste from goalAppjs.  Here, we use localstorage. goalApp.js does not contain localstorage

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

    window.addEventListener('DOMContentLoaded', retrieveData);

    /**declare variables */
    let editItem;
    let editID = '';
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
            //add items to local storage so we can pull it later
            setLocalStorage(id, goalsValue);
            //setback to default
            setBacktoDefault();
            //clear all the input
            clearAll();
           
        } else if (goalsValue && editYes) {
            editItem.innerHTML = goalsValue;
            setAlert(0,"goal changed", "alert-success");
            //edit local storage
            editLocalStorage(editID, goalsValue);
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
        const eTarget = e.currentTarget.parentElement.parentElement;
        editItem = e.currentTarget.parentElement.previousElementSibling;

        //set input value
        Goals.value = editItem.innerHTML;
        editYes = true;
        //set the variables

        editID = eTarget.dataset.id;
        
    }

    //activate delete button
    function deleteGoal(e) {
        
        const eleTarget = e.currentTarget.parentElement.parentElement;

        const idTarget = eleTarget.dataset.id;

        goalOutput.removeChild(eleTarget);
        
        if (goalOutput.children.length === 0) {
            clearList.style.visibility = "hidden";
        }
        setAlert(0,"goal deleted", "alert-danger");
        setBacktoDefault();
        
        //remove from local storage
        removeLocalStorage(idTarget);
    }
    //set back to default
    function setBacktoDefault() {
        Goals.value = '';
        GoalSubmitBtn.textContent = "submit";
        GoalSubmitBtn.removeAttribute('style');
        editID = '';
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
            //clear localstorage
            localStorage.removeItem('list');
        })
    }

    /***local storage functions***/
    //set local storage
    function setLocalStorage(id, goalsValue) {
        const goals = { id, goalsValue };
        let items = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
        
        items.push(goals);
        localStorage.setItem('list', JSON.stringify(items));
    }
   
    // remove local storage
    function removeLocalStorage(idTarget) {
    
        let items = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

        items = items.filter(function (item) {
            if (item.id !== idTarget) {
                return item;
            }
        })
          localStorage.setItem('list', JSON.stringify(items));
    }
    // edit local storage
    function editLocalStorage(editID, goalsValue) {
        let items = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

        items.map(function (item) {
            if (item.id === editID) {
                item.goalsValue = goalsValue;
            }
            return item;
        })
         localStorage.setItem('list', JSON.stringify(items));
    }

    /**retrieve data from local storage **/
    
    function retrieveData() {
        let items = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
        
        if (items.length > 0) {
            items.forEach(function (item) {
                createListItem(item.id, item.goalsValue);
            })
        }
    };
    
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
   
};
