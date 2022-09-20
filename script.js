new Swiper('.swiper', {
 
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  loop: true,
 
  breakpoints: {
   
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },

    360: {
      slidesPerView: 1.7,
      spaceBetween: 20
    },

    420: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    450: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
   
    520: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },

    570: {
      slidesPerView: 2.75,
      spaceBetween: 20
    },
    
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
})