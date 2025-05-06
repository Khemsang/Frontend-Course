let slideImages = document.querySelectorAll("img");
let prevBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");

let counter = 0;
let imageCounter;

nextBtn.addEventListener("click", sliderNext);

function sliderNext() {
    slideImages[counter].style.animation = " next1 0.5s ease-in forwards";
    if (counter >= slideImages.length -1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = " next2 0.5s ease-in forwards";
    updateIndicator();
}
prevBtn.addEventListener("click", sliderPrevious);


function sliderPrevious() {
    slideImages[counter].style.animation= " previous1 0.5s ease-in forwards";
    if (counter === 0) {
        counter = slideImages.length -1;
    } else{
        counter--;
    }
    slideImages[counter].style.animation= " previous2 0.5s ease-in forwards";
    updateIndicator();
}
