console.log('Connected to project-script.js!')

// query selectors
const slide1 = document.querySelector("#tictactoe")
const slide2 = document.querySelector("#tamagotchi")
const slide3 = document.querySelector("#project3")

// functions

// change project on click function
advanceSlide = function () {
    document.getElementById('tictactoe').style.display = "none";
    document.getElementById('tamagotchi').style.display = "block";

};

advanceSlide2 = function () {
    document.getElementById('tamagotchi').style.display = "none";
    document.getElementById('project3').style.display = "block";

};

advanceSlide3 = function () {
    document.getElementById('project3').style.display = "none";
    document.getElementById('tictactoe').style.display = "block";

};

//event listeners
slide1.addEventListener("click", advanceSlide);
slide2.addEventListener("click", advanceSlide2);
slide3.addEventListener("click", advanceSlide3);


