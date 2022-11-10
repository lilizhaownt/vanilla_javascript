/*navigation bar function*/
function showNav() {
    let x = document.getElementById('changeNav').querySelectorAll(".tabs");
    for (let i = 0; i < x.length; i++){
        x[i].classList.toggle('response');
    }
}

/***modal function***/
function showModal() {

  document.getElementsByClassName("modal")[0].style.display = 'block';
}

function closeModal() {
  document.getElementsByClassName("modal")[0].style.display = 'none';  
}

//when user clicks anywhere outside of the modal, close it
let mo = document.getElementsByClassName("modal")[0];
window.onclick = function (event) {
    if (event.target === mo) {
        mo.style.display = "none";
    }
}
