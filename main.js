// Change navbar background color when scrolling
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
    // JavaScript for Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1; // Go to the last slide if at the beginning
  } else if (index >= totalSlides) {
    currentSlide = 0; // Go to the first slide if at the end
  }

  // Move the slider to the current slide
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`; // Adjust for smaller slides
}

prevButton.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});

// Initial display
showSlide(currentSlide);
