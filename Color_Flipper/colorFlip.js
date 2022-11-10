
//disable the button and turn it on only if flipColor() or hexColor() is activated

const button = document.querySelector('button')
    
button.disabled = true;

function flipColor() {
    
    document.getElementById("color").style.color = "white";

    document.getElementById("hex").style.color = "black";
    
    button.disabled = false;

    let activate = document.getElementById('btn');
        
    activate.addEventListener("click", colorChange);
    
    activate.removeEventListener("click", hexChange);

}
    
function hexColor() {

    document.getElementById("hex").style.color = "white";

    document.getElementById("color").style.color = "black";

    button.disabled = false;

    let activate = document.getElementById('btn');

    activate.addEventListener("click", hexChange);

    activate.removeEventListener("click", colorChange);
}


/*Flip color function */

let colorArray = ["ORANGE", "LIGHTBLUE", "PURPLE", "YELLOW", "GREEN"];

let count = 0;
function colorChange() {
    count = count + 1;

    document.getElementById("bodyColor").style.background = colorArray[count % colorArray.length];

    document.getElementById("text").innerHTML = colorArray[count % colorArray.length];
}

/*Hex color code generator function */

function hexChange() {
    var hexSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var String1, String2, String3, String4, String5, String6 = [];
    String1 = [hexSymbols[Math.floor(Math.random() * 16)]];
    String2 = [hexSymbols[Math.floor(Math.random() * 16)]];
    String3 = [hexSymbols[Math.floor(Math.random() * 16)]];
    String4 = [hexSymbols[Math.floor(Math.random() * 16)]];
    String5 = [hexSymbols[Math.floor(Math.random() * 16)]];
    String6 = [hexSymbols[Math.floor(Math.random() * 16)]];

    var totalString = [String1, String2, String3, String4, String5, String6]
    var finalString = totalString.toString();
    finalString = finalString.replace(/,/g, "");
    var colorCode = "#" + finalString;
    document.getElementById("text").innerHTML = colorCode;
    document.getElementById("bodyColor").style.background = colorCode;
}
