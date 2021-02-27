const slides = document.querySelectorAll('.slide-item');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlideIndex = 0;

nextBtn.addEventListener('click', function () {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides.forEach(function (slide) {
    slide.classList.add('d-none');
  })
  slides[currentSlideIndex].classList.remove('d-none');
})

prevBtn.addEventListener('click', function () {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  slides.forEach(function (slide) {
    slide.classList.add('d-none');
  })
  slides[currentSlideIndex].classList.remove('d-none');
})