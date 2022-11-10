function show() {
    let x = document.querySelectorAll(".tabs");

    let y = document.getElementById('togo')

    for (let i = 0; i < x.length; i++){
        x[i].classList.toggle('response');
    }
    y.classList.toggle('move');
}
