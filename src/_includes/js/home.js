window.onload = () => {
  const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 120,
    },
    slidesPerView: 'auto',
    spaceBetween: 50,
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
};
