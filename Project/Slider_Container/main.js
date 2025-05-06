// access the images
let slideImages = document.querySelectorAll('img');
// access the next and previous buttons
let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.previous');
// access the dots
let indicators = document.querySelectorAll('.dot');
let counter = 0; // counter to keep track of the current image
let imageCounter;

// function next buttons
nextBtn.addEventListener("click", sliderNext);
 
function sliderNext() {
    slideImages[counter].style.animation ="next1 0.5s ease-in forwards";
    if (counter >= slideImages.length - 1){
        counter = 0;
    }else{
        counter++;
    }
    slideImages[counter].style.animation ="next2 0.5s ease-in forwards";
}


prevBtn.addEventListener("click", silderPreview);

function silderPreview() {
    slideImages[counter].style.animation = "previous1 0.5s ease-in forwards";
    if (counter === 0) {
      counter = slideImages.length - 1;
    } else {
      counter--;
    }
    slideImages[counter].style.animation = "previous2 0.5s ease-in forwards";
  }
  