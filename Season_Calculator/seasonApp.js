
/*Create API to store seaon info*/

const data = [
    {
        season: "Spring",
        color: "#90ee90",
        img: "spring.jpg",
        range:"March 20 - June 21",
    },
    {
        season: "Summer",
        color: "gold",
        img: "summer.jpg",
        range: "June 21 - September 22",
    },
    {
        season: "Fall",
        color: "orange",
        img: "fall.jpg",
        range:"September 22 - December 21",
    },
    {
        season: "Winter",
        color: "#ADD8E6",
        img: "winter.jpg",
        range:"December 21 - March 20",
    }
]

/***Time calculation***/
const d = new Date();

const year = d.getFullYear();

// 1s = 1000ms;
// 1min = 60s;
// 1hr = 60min;
// 1d = 24hr;

//values in milliseconds
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const springDay = new Date(year, 2, 20).getTime();

const summerDay = new Date(year, 5, 21).getTime();
const fallDay = new Date(year, 8, 22).getTime();
const winterDay = new Date(year, 11, 21).getTime();


let t, future, days, hrs, min, sec;
//function for display time

const DAY = document.getElementById('day');
const HOUR = document.getElementById('hour');
const MINUTE = document.getElementById('minute');
const SECOND = document.getElementById('second')

function displayTime(futureTime) {
     days = Math.floor(futureTime / oneDay);
            hrs = Math.floor((futureTime % oneDay) / oneHour);//future%oneDay excludes the time of one day
            min = Math.floor((futureTime % oneHour) / oneMinute);//future%oneHour excludes the time of oneDay and oneHour
            sec = Math.floor((futureTime % oneMinute) / 1000);//future%oneHour excludes the time of oneDay and oneHour
            DAY.innerHTML = days;
            HOUR.innerHTML = hrs;
            MINUTE.innerHTML = min;
            SECOND.innerHTML = sec;
}
//function to calculate time

function getTime(seasonSelected) {
    const currentTime = new Date().getTime();//in ms;
    if (seasonSelected === "Spring") {
        t = springDay - currentTime;
        if (t <= 0) {
            const newSpringDay = new Date(year + 1, 2, 20).getTime();
            future = newSpringDay - currentTime;
            displayTime(future);
        }
        else {
            future = springDay - currentTime;
            displayTime(future);
        }
    }
     if (seasonSelected === "Summer") {
       t = summerDay - currentTime;
        if (t <= 0) {
            const newSummerDay = new Date(year + 1, 5, 21).getTime();
            future = newSummerDay - currentTime;
            displayTime(future);
        }
        else {
            future = summerDay - currentTime;
            displayTime(future);
        }
    }
     if (seasonSelected === "Fall") {
        t = fallDay - currentTime;
        if (t <= 0) {
            const newFallDay = new Date(year + 1, 8, 22).getTime();
            future = newFallDay - currentTime;
            displayTime(future);
        }
        else {
            future = fallDay - currentTime;
            displayTime(future);
        }
    }
    if (seasonSelected === "Winter") {
        
         t = winterDay - currentTime;
        if (t <= 0) {
            const newWinterDay = new Date(year + 1, 2, 20).getTime();
            future = newWinterDay - currentTime;
            displayTime(future);
        }
        else {
            future = winterDay - currentTime;
            displayTime(future);
        }
    }      
}
/* get current temperature in Farenheit */

/*get current season and set it as default accordingly*/
const currentSeason = document.getElementById('currentSeason');
const background = document.body.style;

function todaySeason() {
    const today = d.getTime();
    let seasonToday = '';

    if (today >= springDay && today < summerDay) {
        seasonToday = "Spring";
    }
    else if (today >= summerDay && today < fallDay)
    {
        seasonToday = "Summer";
    }
    else if (today >= fallDay && today < winterDay) {
        seasonToday = "Fall";
    } else {
        seasonToday = "Winter";
    }
    
    data.map(function (item) {

        if (item.season === seasonToday)
        {
            currentSeason.innerHTML = item.season;
            currentSeason.style.color = item.color;
            background.background = item.color;
            image.src = item.img;
        }
})
}

/*get the value from the option selection*/

const season = document.getElementById('seasons');
const image = document.getElementById("image");
const selectedSeason = document.getElementById('selectedSeason');
let countdown;

season.addEventListener('change', function () {
    
    const seasonSelected = season.value;
    
    //change the background,img, and words according to selection

    data.map(function (item) {
        if (item.season === seasonSelected) {
            background.background = item.color;
            image.src = item.img;
            selectedSeason.innerHTML = item.season + " "+"("+item.range+")";
            selectedSeason.style.color = item.color;
        }
    });
    
    //start the clock countdown with getTime function
   
    countdown = setInterval(function () {
        getTime(seasonSelected)
    },1000)
   
});

function stopTimer() {
    clearInterval(countdown);
}

/**not part of John's challenge, but I have decided to include a weather app  */
const dateTime = document.getElementById('date-time');
const Place = document.getElementById('place');
const currentTemp = document.getElementById('current-temp');
const tempDescription = document.getElementById('temp-description');
const weatherIcon = document.getElementById('weather-icon');

//get Time and date
const month = d.getMonth();
const date = d.toLocaleDateString()
const time = d.toLocaleTimeString();

function displayWeather() {
    
    dateTime.textContent = `${date} (${time})`
    //find the location with geolocation
    let long, lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //get the weather API from opeanweathermap.com
            const APIkey = 'b5f336dd5adec54ebaa71dfd86d32ff6';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIkey}`;

            //get the information from the api

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    
                    Place.textContent = `${data.name}, ${data.sys.country}`;//get the place

                    const kelvin = data.main.temp;//temp in API is kelvin
                    const F = Math.floor((kelvin - 273.15) * 9 / 5 + 32);//convert kelvin to Farenheight
                    currentTemp.textContent = `${F} °F`;

                    tempDescription.textContent = `${data.weather[0].description}`;

                    //get weather icon

                    const ICON = data.weather[0].icon;
                    const iconURL = `http://openweathermap.org/img/wn/${ICON}@2x.png`;
                    weatherIcon.src = iconURL;
                })
        });
    }
}

/**display DOMContent*****/
window.addEventListener("DOMContentLoaded", function () {
    todaySeason() 
    displayWeather();
});