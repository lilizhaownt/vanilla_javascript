/**John wanted a slide button */
//functions for button controls

const vid = document.querySelector('.video');

document.getElementById('pause').addEventListener('click', function () {
    const slideBTN = document.getElementById('slide');
 
    if (!slideBTN.classList.contains("slideNow")) {
        slideBTN.classList.add('slideNow');
        slideBTN.style.right = "153px";
        vid.pause();
    } else {
        slideBTN.classList.remove('slideNow');
        slideBTN.style.right = "80px";
        vid.play();
    }

})

//John wanted the pre-loader to disapper when the window is fully loaded.  Without the setTimeout function, you only get to see the pre-loader gif for 2 seconds before it disapper;

const load = document.querySelector('.preloader');

window.addEventListener("load", function () {
    this.setTimeout(function () {
        load.classList.add('hide-preloader');
    }, 2500);
    
})

