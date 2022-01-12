const testimonialSwiper = new Swiper('.swiper-coverflow', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 120,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 640px
    720: {
      slidesPerView: 'auto',
    },
  },
});

const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 120,
  },
  slidesPerView: 'auto',
  spaceBetween: 50,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 640px
    720: {
      slidesPerView: 'auto',
      spaceBetween: 50,
      centeredSlides: false,
    },
  },
});
