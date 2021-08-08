//--Nicholas R. Harding 20200344 - IT5039 Project 1--

console.log(document.getElementById("mon2000").value , "look at me")
// refresh page
function refreshValues() {
    document.getElementById("bookingForm").reset();
    addDate();
    cinemaValue = "";
    pickedDayValue = "";
    timeForMovieValue = "";
    movieChosenValue = "";

}
function addDate() {
    var today = new Date();
    var yyyy = today.getFullYear().toString();
    var mm = today.getMonth() + 1;
    mm = mm.toString().padStart(2, "0");
    var dd = today.getDate().toString().padStart(2, "0");
    var todaysDate = `${yyyy}-${mm}-${dd}`;
    var inputDate = document.getElementById("bookingDay");
    inputDate.min = todaysDate;
}
function getSelectedValue(id) {
    console.log("Im in the function getSelectedValue()");
    timeForMovie = document.getElementById(id);
    timeForMovieValue = timeForMovie.value;
    console.log(`${timeForMovie.value} timeForMovie.value`);
    console.log(`${timeForMovieValue} timeForMovieValue`);
}

function addMovieTimes() {
    //Movie arrays for time adjustments on particular days
    cinemaValue = cinemaLocation.value;
    movieChosen = document.getElementById("movieChoice").value;
    // movieChosen = movieChosen.value;
    pickedDayValue = document.getElementById("bookingDay").value;
    // pickedDay = pickedDay.value;
    //alert(`${cinemaLocation}  ${movieChosen} ${pickedDay}`);
    var day = new Date(pickedDayValue);
    console.log(`${pickedDayValue} this is day`);
    console.log(`${day} this is day`);
    day = day.getDay();
    //clear previous times if any
    var moviesTimes = document.querySelectorAll("optgroup");
    moviesTimes.forEach(element => {
        element.hidden = true;
    });

    if (movieChosen === "movie1") {
        movieChosenValue = "Bad Boys For Life";
        console.log("after movieChosen");
        if (day === 1) {
            document.getElementById("monday").hidden = false;
            document.getElementById("mon1800").hidden = false;
            document.getElementById("mon2000").hidden = false;
            document.getElementById("mon2200").hidden = false;
        }
        if (day === 2) {
            document.getElementById("tuesday").hidden = false;
            document.getElementById("tue1800").hidden = false;
            document.getElementById("tue2000").hidden = false;
            document.getElementById("tue2200").hidden = false;
        }
        if (day === 3) {
            document.getElementById("wednesday").hidden = false;
            document.getElementById("wed1800").hidden = false;
            document.getElementById("wed2000").hidden = false;
            document.getElementById("wed2200").hidden = false;
        }
        if (day === 4) {
            document.getElementById("thursday").hidden = false;
            document.getElementById("thur1800").hidden = false;
            document.getElementById("thur2000").hidden = false;
            document.getElementById("thur2200").hidden = false;
        }
        if (day === 5) {
            document.getElementById("friday").hidden = false;
            document.getElementById("fri1800").hidden = false;
            document.getElementById("fri2000").hidden = false;
            document.getElementById("fri2200").hidden = false;
        }
        if (day === 6) {
            document.getElementById("saturday").hidden = false;
            document.getElementById("sat1700").hidden = false;
            document.getElementById("sat2100").hidden = false;
            document.getElementById("sat2230").hidden = false;
        }
    };
    if (movieChosen === "movie2") {
        movieChosenValue = "Bloodshot";
        if (day === 1) {
            document.getElementById("monday").hidden = false;
            document.getElementById("mon1800").hidden = false;
            document.getElementById("mon1900").hidden = false;
            document.getElementById("mon2000").hidden = false;
            document.getElementById("mon2200").hidden = false;
        }
        if (day === 2) {
            document.getElementById("tuesday").hidden = false;
            document.getElementById("tue1800").hidden = false;
            document.getElementById("tue1900").hidden = false;
            document.getElementById("tue2000").hidden = false;
            document.getElementById("tue2200").hidden = false;
        }
        if (day === 3) {
            document.getElementById("wednesday").hidden = false;
            document.getElementById("wed1800").hidden = false;
            document.getElementById("wed1900").hidden = false;
            document.getElementById("wed2000").hidden = false;
            document.getElementById("wed2200").hidden = false;
        }
        if (day === 4) {
            document.getElementById("thursday").hidden = false;
            document.getElementById("thur1800").hidden = false;
            document.getElementById("thur1900").hidden = false;
            document.getElementById("thur2000").hidden = false;
            document.getElementById("thur2200").hidden = false;
        }
        if (day === 5) {
            document.getElementById("friday").hidden = false;
            document.getElementById("fri1800").hidden = false;
            document.getElementById("fri1900").hidden = false;
            document.getElementById("fri2000").hidden = false;
            document.getElementById("fri2200").hidden = false;
        }
        if (day === 6) {
            document.getElementById("saturday").hidden = false;
            document.getElementById("sat1800").hidden = false;
            document.getElementById("sat1900").hidden = false;
            document.getElementById("sat2000").hidden = false;
            document.getElementById("sat2200").hidden = false;
        }
    };
    if (movieChosen === "movie3") {
        movieChosenValue = "Sonic The Hedge Hog";
        var i = 0;
        if (day === 1) {
            document.getElementById("monday").hidden = false;
            document.getElementById("mon1500").hidden = false;
            document.getElementById("mon1700").hidden = false;
            document.getElementById("mon1930").hidden = false;
            document.getElementById("mon2200").hidden = false;
        }
        if (day === 2) {
            document.getElementById("tuesday").hidden = false;
            document.getElementById("tue1500").hidden = false;
            document.getElementById("tue1700").hidden = false;
            document.getElementById("tue1930").hidden = false;
            document.getElementById("tue2200").hidden = false;
        }
        if (day === 3) {
            document.getElementById("wednesday").hidden = false;
            document.getElementById("wed1500").hidden = false;
            document.getElementById("wed1700").hidden = false;
            document.getElementById("wed1930").hidden = false;
            document.getElementById("wed2200").hidden = false;
        }
        if (day === 4) {
            document.getElementById("thursday").hidden = false;
            document.getElementById("thur1500").hidden = false;
            document.getElementById("thur1700").hidden = false;
            document.getElementById("thur1930").hidden = false;
            document.getElementById("thur2200").hidden = false;
        }
        if (day === 5) {
            document.getElementById("friday").hidden = false;
            document.getElementById("fri1500").hidden = false;
            document.getElementById("fri1700").hidden = false;
            document.getElementById("fri1930").hidden = false;
            document.getElementById("fri2200").hidden = false;
        }
        if (day === 6) {
            document.getElementById("saturday").hidden = false;
            document.getElementById("sat1500").hidden = false;
            document.getElementById("sat1700").hidden = false;
            document.getElementById("sat1930").hidden = false;
            document.getElementById("sat2200").hidden = false;
        }


    };
}

//variables take input values
var cinemaLocation = document.querySelector("#cinema");
console.log((cinemaLocation).value);
var movieChosen = document.querySelector("#movieChoice");
console.log((movieChosen).value);
var pickedDay = document.querySelector("#bookingDay");
console.log(pickedDay.value);
var timeForMovie = document.getElementById("movieTime");
console.log((timeForMovie).value);
const checkSelection = document.getElementById("checkAvailability");
var cinemaValue = "";
var pickedDayValue = "";
var timeForMovieValue = "";
var movieChosenValue = "";

//check var on clicks
cinemaLocation.addEventListener("change", (event) => {
    if ((movieChosen.value != "") && (pickedDay.value != "")) {
        addMovieTimes();
    }
    else {
        cinemaValue = (document.getElementById("cinema").value).toString();

        console.log((cinemaLocation).value);
        cinemaLocation.style.borderColor = "initial";
    }
})

//check var on clicks
movieChosen.addEventListener("change", (event) => {
    if ((pickedDay.value != "") && (cinemaLocation.value != "")) {
        addMovieTimes();
    }
    else {
        movieChosenValue = document.getElementById("movieChoice").value;
        console.log((movieChosen).value);
        console.log(movieChosen.value === "");
        console.log((movieChosen.value === "movie1") + "This is checking to see if value is string movie1");
        movieChosen.style.borderColor = "initial";
    }
})

//check var on clicks
pickedDay.addEventListener("change", (event) => {
    if ((movieChosen.value != "") && (cinemaLocation.value != "")) {
        addMovieTimes();
    }
    else {
        pickedDayValue = document.getElementById("bookingDay").value;
        console.log((pickedDayValue).value);
        pickedDay.style.borderColor = "initial";
        var day = new Date(pickedDayValue);
        console.log(day);
        var day = day.getDay();
        console.log(day);
        if (day === 0) {
            alert("Closed on Sundays");
        }
    }
})

//Prompt user to pick a valid date, movie and location before a movie time can be given
timeForMovie.addEventListener("click", (event) => {
    if ((movieChosen.value === "") || (pickedDay.value === "") || (cinemaLocation.value === "")) {
        if (movieChosen.value === "") {
            console.log(movieChosen.value)
            // alert('Please pick a movie');
            movieChosen.focus();
            movieChosen.scrollIntoView(false);
            movieChosen.style.borderColor = "red";
            movieChosen.style.transitionDelay = ".5s";

        }
        if (cinemaLocation.value === "") {
            console.log(cinemaLocation.value)
            cinemaLocation.focus();
            cinemaLocation.scrollIntoView(false);
            cinemaLocation.style.borderColor = "red";
            cinemaLocation.style.transitionDelay = ".5s";
        }
        if (pickedDay.value === "") {
            console.log(pickedDay.value)
            pickedDay.focus();
            pickedDay.scrollIntoView(false);
            pickedDay.style.borderColor = "red";
            pickedDay.style.transitionDelay = ".5s";
        }
        alert("please fill in the highlighted fields before selecting time");
    }
    else {
        timeForMovieValue = timeForMovie.value;
        console.log(`${timeForMovie.value} timeForMovie.value`);
        console.log(`${timeForMovieValue} timeForMovieValue`);
    }
})

document.getElementById("movieTime").addEventListener("onchange", (event) => {
    alert("clicked")
})



//check to see if form has been filled
checkSelection.addEventListener("click", (event) => {
    console.log(pickedDay.value)
    console.log(cinemaLocation.value)
    console.log(movieChosenValue)
    console.log(timeForMovieValue)
    if ((movieChosenValue !== "") && (pickedDay !== "") && (timeForMovieValue !== "") && (cinemaValue !== "")) {
        //alert("hello beautiful");
        pickedDayValue = document.getElementById("bookingDay").value;
        //test to see correct values selected
        console.log(`cinema = ${cinemaValue}`)
        console.log(`movie = ${movieChosenValue}`)
        console.log(`date = ${pickedDayValue}`)
        console.log(`time = ${timeForMovieValue}`)
        let cinema = document.createElement("input");
        cinema.value = cinemaValue;
        cinema.id = "hiddenCinema";
        cinema.hidden = true;
        cinema.readOnly = true;
        let movie = document.createElement("input");
        movie.value = movieChosenValue;
        movie.id = "hiddenMovie";
        movie.hidden = true;
        movie.readOnly = true;
        let movieDay = document.createElement("input");
        movieDay.value = pickedDayValue;
        //console.log(`final pickedDayValue: ${pickedDayValue}`);
        movieDay.id = "hiddenDay";
        movieDay.hidden = true;
        movieDay.readOnly = true;
        let movieTime = document.createElement("input");
        movieTime.value = timeForMovieValue;
        movieTime.id = "hiddenMovieTime";
        movieTime.hidden = true;
        movieTime.readOnly = true;
        document.getElementById("hiddenContainer").appendChild(cinema);
        document.getElementById("hiddenContainer").appendChild(movie);
        document.getElementById("hiddenContainer").appendChild(movieDay);
        document.getElementById("hiddenContainer").appendChild(movieTime);

        renderFunction();
    }
    else {
        if (movieChosenValue === "") {
            // alert('Please pick a movie');
            movieChosen.focus();
            movieChosen.scrollIntoView(false);
            movieChosen.style.borderColor = "red";
            movieChosen.style.transitionDelay = ".5s";

        }
        if (cinemaValue === "") {
            cinemaLocation.focus();
            cinemaLocation.scrollIntoView(false);
            cinemaLocation.style.borderColor = "red";
            cinemaLocation.style.transitionDelay = ".5s";
        }
        if (pickedDayValue === "") {
            pickedDay.focus();
            pickedDay.scrollIntoView(false);
            pickedDay.style.borderColor = "red";
            pickedDay.style.transitionDelay = ".5s";
        }
        if (timeForMovieValue === "") {
            timeForMovie.focus();
            timeForMovie.scrollIntoView(false);
            timeForMovie.style.borderColor = "red";
            timeForMovie.style.transitionDelay = ".5s";
        }
        alert("please fill in the highlighted fields before selecting time");

    }
})

