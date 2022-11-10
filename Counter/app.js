/*Counter function will accept an argument that will either decrease or increase a count.  If it recevie a reset argument then the number is reset to 0; */

let count = 0;
let number = 0;
let num = document.getElementById("num");

function counter(arg) {

    if (arg === "increase") {
        count++;
        number = count;
        num.innerHTML = number;
        num.style.color = "green";
    }
    else if (arg === "decrease") {
        count--;
        number = count;
        num.innerHTML = number;
        num.style.color = "red";
    }
    else {
        count = 0;
        number = 0;
        num.innerHTML = number;
        num.style.color = "black";
    }
    
}