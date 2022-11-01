const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    // },

    autoplay: {
        delay: 3000,
        stopOnLastSlides:false,
        disableOnInteraction: false,
    },

    speed: 500,

    slidesPerView: 1,

    initialSlide: 0,

    loop: true,

    grabCursor: true,
  });