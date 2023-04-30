let imgWrapper = document.querySelectorAll(".slide");
let SliderContainer = document.querySelector(".dots-container");
let dotsSlider = document.getElementsByClassName("dot");
let btn = document.getElementsByClassName("slide-btn");
// This variable is use for move on slides
// for Example:- Now counter value is zero when we click on next button 
// then i use increment operator counter++ if i click two times on next 
// button then the counter value is increase 0 to 2 then our image slide is going on second indexed

var counter = 0;
// This function for move previous slide;
const prevSlide = () => {
  counter--;
  sliderImg();
};

// This function for move next image slide
const nextSlide = () => {
  sliderImg();
  counter++;
};

// this function is used for perform images dots slider functionality

const dotsSliderFunc = () => {
  for (var i = 0; i < imgWrapper.length; i++) {
    const SliderDots = document.createElement("div");
    SliderDots.classList.add("dot");
    SliderContainer.appendChild(SliderDots);
    SliderDots.setAttribute("data-index", i);

    SliderDots.addEventListener("click", function (i) {
      for (var k = 0; k < dotsSlider.length; k++) {
        dotsSlider[k].classList.remove("active");
      }
      i.target.classList.add("active");
      counter = this.dataset.index;
      imgWrapper.forEach((imgSlides, index) => {
        imgSlides.style.left = `${index * 100}%`;
        if (counter == imgWrapper.length) {
          counter = 0;
        }

        imgSlides.style.transform = `translateX(-${counter * 100}%)`;
      });
    });
  }
};
dotsSliderFunc();
const sliderImg = () => {
  imgWrapper.forEach((imgSlides, index) => {
    imgSlides.style.left = `${index * 100}%`;
    if (counter == imgWrapper.length) {
      counter = 0;
    }
    imgSlides.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// setInterval(nextSlide, 3000);
