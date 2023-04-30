let imgWrapper = document.querySelectorAll(".slide");
let SliderContainer = document.querySelector(".dots-container");
let dotsSlider = document.getElementsByClassName("dot");
let btn = document.getElementsByClassName('slide-btn');
console.log(btn);
var counter = 0;
const prevSlide = () => {
  counter--;
  sliderImg();
};
const nextSlide = () => {
  sliderImg();
  counter++;
};
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
