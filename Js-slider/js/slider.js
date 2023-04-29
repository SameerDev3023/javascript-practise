let imgWrapper = document.querySelectorAll(".slide");
let SliderContainer = document.querySelector('.dots-container');
let dotsHtml = document.getElementsByClassName('dot');
var counter = 0;
const prevSlide = () => {
  sliderImg();
  counter--;
};
const nextSlide = () => {
  sliderImg();
  counter++;
};

const sliderImg = () => {
  imgWrapper.forEach((imgSlides, index) => {
    imgSlides.style.left = `${index * 100}%`;
    if (counter == imgWrapper.length) {
      counter = 0;
    }
    imgSlides.style.transform = `translateX(-${counter * 100}%)`;
  });
};
for(var i=0;i<imgWrapper.length;i++){
    const SliderDots = document.createElement("div");
    SliderDots.classList.add("dot");
    // console.log(SliderDots)
    SliderContainer.appendChild(SliderDots);   
}
setInterval(nextSlide, 2000);
