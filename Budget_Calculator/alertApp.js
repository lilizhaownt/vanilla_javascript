//instead of all parts of the app share the same alert


const Alert = document.querySelectorAll('.alert');

function setAlert(index, text, action) {
        
        Alert[index].style.visibility = "visible";
        Alert[index].innerHTML = text;
        Alert[index].classList.add(action);
        setTimeout(function () {
            Alert[index].style.visibility = "hidden";
            Alert[index].classList.remove(action);
        }, 1000)
    }

    
export default setAlert;