new Swiper(".swiper-container", {
      speed: 1000,
      spaceBetween: 100,
      effect: "slide",
      slidesPerView: "1",
      autoplay: {
            delay: 2500,
      },
      loop: 'true',
      // flipEffect: {
      //       slideShadows: false,
      // },
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
      }
});