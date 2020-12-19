new Swiper(".swiper-container", {
      speed: 1000,
      spaceBetween: 100,
      effect: "flip",
      slidesPerView: "1",

      loop: 'true',
      flipEffect: {
            slideShadows: false,
      },
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
      }
});