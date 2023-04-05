const btnNavEl = document.querySelector('.nav__button');
const headerEl = document.querySelector('.pb__header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// NEW GALLERY

// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-slide img');

// //buttons
// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// //counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

// //button enet listeners
// nextBtn.addEventListener('click', () => {
//   if (counter >= carouselImages.length - 1) return;
//   carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//   counter++;
//   carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
// });

// prevBtn.addEventListener('click', () => {
//   if (counter <= 0) return;
//   carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//   counter--;
//   carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
// });

// carouselSlide.addEventListener('transitionend', () => {
//   if (carouselImages[counter].id === 'lastClone') {
//     carouselSlide.style.transition = 'none';
//     counter = carouselImages.length - 2;
//     carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
//   }
//   if (carouselImages[counter].id === 'firstClone') {
//     carouselSlide.style.transition = 'none';
//     counter = carouselImages.length - counter;
//     carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
//   }
// });
