const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

swiper.on("mouseenter", () => {
  swiper.autoplay.stop();
});

swiper.on("mouseleave", () => {
  swiper.autoplay.start();
});
