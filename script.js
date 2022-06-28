console.log('Connected to script.js!')

// query selectors
const easterEgg = document.querySelector(".home-title");

//functions

//background color change on hover
changeBg = function () {
    document.body.style.backgroundColor = '#DB7C26';
};

changeBgBack = function () {
    document.body.style.backgroundColor = '#780116'

};






//event listeners
easterEgg.addEventListener("mouseenter", changeBg);
easterEgg.addEventListener("mouseleave", changeBgBack);


