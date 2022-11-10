/**This project got inspiration from John's slider challenge.  Vanilla javascript 12 challenges */

//Array to contain photos

const pictures = ["picture1.jpg", "picture2.jpg", "picture3.jpg", "picture4.jpg", "picture5.jpg"];

//nav bar control codes
const OpenNavBTN = document.getElementById('openNavBTN');
const Links = document.querySelectorAll('.links');

let click = false;

OpenNavBTN.addEventListener('click', function () {
    toggleNav();
})


function openNav() {
    Links.forEach(items => items.classList.add('showLinks'));
    click = true;
}
function closeNav() {
    Links.forEach(items => items.classList.remove('showLinks'));
    click = false;
}
function toggleNav() {
    click ? closeNav() : openNav();
}

//photo container codes//

//select elements for display
const DisplayPic = document.getElementById('displayPic');
const Dots = document.querySelectorAll('.dots');
const Pause = document.getElementById('pause');

let index = 0;
let interval = 0;
function display(boolean) {
    if (boolean) {

        console.log(boolean)
        interval = setInterval(function () {
        DisplayPic.src = pictures[index];
        //Dots[index].classList.toggle('showdots');
    
        //code for blanking dots
    
        setTimeout(() => {
            Dots[index].classList.add('showdots');
        }, 1000)
  
        Dots[index].classList.remove('showdots');
    
        index = index + 1;
   
        if (index > pictures.length - 1) {
            index = 0;
        }

        }, 2000);
    }
    else {
        clearInterval(interval);
    }
}

//codes to control pause and play button
let stop = false;

function startInterval() {
    display(true);
    stop = true;
    Pause.innerHTML = `
    <i class="fa fa-pause" aria-hidden="true"></i>
    `;
}
function stopInterval() {
    display(false)
    stop = false;
    Pause.innerHTML = `
    <i class="fa fa-play" aria-hidden="true"></i>
    `;
}
function togglePause() {
    stop ? stopInterval() : startInterval();
}
Pause.addEventListener('click', () => {
    togglePause()
})

window.addEventListener('DOMContentLoaded', () => {
    startInterval();
})
