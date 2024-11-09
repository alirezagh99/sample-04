const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

// const swiper2 = new Swiper(".swiper2", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   // If we need pagination
//   //   pagination: {
//   //     el: ".swiper-pagination",
//   //     clickable: true,
//   //   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next2",
//     prevEl: ".swiper-button-prev2",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     900: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },

//   // And if we need scrollbar
//   //   scrollbar: {
//   //     el: ".swiper-scrollbar",
//   //   },
// });

var swiper2 = new Swiper(".swiper2", {
  pagination: ".swiper-pagination2",
  paginationClickable: true,
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
