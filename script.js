console.log('Connected to script.js!')

// queryselector
const easterEgg = document.querySelector(".home-title");

//function
changeBg = function () {
    console.log('mouse enter!')
    document.body.style.backgroundColor = '#DB7C26';
};

changeBgBack = function () {
    console.log('mouse leave!')
    document.body.style.backgroundColor = '#780116'

};





easterEgg.addEventListener("mouseenter", changeBg);
easterEgg.addEventListener("mouseleave", changeBgBack);


