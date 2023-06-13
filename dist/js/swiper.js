const swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: autoplaySpeed,
      disableOnInteraction: false,
    },
    breakpoints: {
      // Konfigurasi pada layar kecil (dibawah 640px)
      640: {
        slidesPerView: 1,
      },
      // Konfigurasi pada layar medium (640px hingga 768px)
      768: {
        slidesPerView: 2,
      },
      // Konfigurasi pada layar besar (di atas 768px)
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