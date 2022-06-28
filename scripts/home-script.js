console.log('Connected to home-script.js!')

// query selectors
const hoverColorChange = document.querySelector(".home-title");

//functions

//background color change on hover
changeBg = function () {
    document.body.style.backgroundColor = '#290100';
};

changeBgBack = function () {
    document.body.style.backgroundColor = '#780116';
};

//event listeners
hoverColorChange.addEventListener("mouseenter", changeBg);
hoverColorChange.addEventListener("mouseleave", changeBgBack);

