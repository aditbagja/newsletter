const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});

swiper.on("mouseenter", () => {
  swiper.autoplay.stop();
});

swiper.on("mouseleave", () => {
  swiper.autoplay.start();
});
