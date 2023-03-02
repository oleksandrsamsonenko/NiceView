import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, EffectCoverflow],
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation
  navigation: {
    enabled: false,
  },

  // Coverflow Effect
  effect: 'coverflow',
  coverflowEffect: {
    depth: 350,
    rotate: 0,
    slideShadows: false,
    scale: 0.6,
  },

  // Responsive breakpoints
  breakpoints: {
    768: {
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
});
