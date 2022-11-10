//1) automatically update the date, month, and year
//2) Toggle the nav-bar and adjust the margin automatically
//3) Once nav-bar reached a specific pixel, it becomes a fixed position.
//4) smooth scroll

//Update the year automatically
const d = new Date();
let year = d.getFullYear();
let updateYear = document.getElementById('date').innerHTML = year;

//open and close nav-bar with toggle
const showNavbar = document.querySelector('.navBar-links');
const moveNavBtn = document.getElementById('nav-btn');

document.getElementById('nav-btn').addEventListener('click', function () {
    showNavbar.classList.toggle('showBar');
    moveNavBtn.classList.toggle('moveNavbtn');
})

/***********fixed Nav-bar***************/

//use element.getBoundingClientRect() method to return the size of an element and its position relative to the viewport.

const navbarContainer = document.querySelector('.navBar-container');

const navbarContainerHeight = navbarContainer.getBoundingClientRect().height;


//pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertically

//select class ="aTag" to change <a> from white to steelblue
const aTag = document.querySelectorAll('.aTag');
window.addEventListener('scroll', function () {
    const scrollHeight = pageYOffset;
     
    if (scrollHeight > navbarContainerHeight) {
        navbarContainer.classList.add('fixed-navBar');
        aTag.forEach(ele => ele.style.color = "steelblue");
    } else {
        navbarContainer.classList.remove('fixed-navBar');
        aTag.forEach(ele => ele.style.color = "white");
    }
})

/****smooth scroll*****/
//select the links

const scrollLinks = document.querySelectorAll('.scroll-links');

//slice extracts a section of a string without modifying original string

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
       //prevent default
        e.preventDefault();
       //create id for navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        
        //offsetTop - a number, representing the top position of the element in pixels.  Use this function to get to the top part of all elements.
        
        //Top of element is currently blocked by nav - bar.Subtract offsetTop pix by nav - bar height;
        
        //The nav-bar height is smaller when it is not at a fixed position.  Need to account for that.

        const scrollLinkHeight = navbarContainer.getBoundingClientRect().height;

        const fixedNav = navbarContainer.classList.contains('fixed-navBar');

        let position = element.offsetTop - scrollLinkHeight;
        
        if (!fixedNav) {
            position = position - scrollLinkHeight;
        }
        
        if (id === "home") {
            position = position - (scrollLinkHeight + 80);
        }
        window.scrollTo({
            left: 0,
            top: position 
        })
    })
})



