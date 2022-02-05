const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPreview: 6,
  spaceBetween: 40,
  slidesPerGroup: 3,
  direction: 'horizontal',
  loop: true,
  loopFillGroupWithBlank: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});