"use strict";

$(document).ready(function () {
  $('.hamBtn').click(function () {
    $('.hamMenu').toggleClass('active');
  });
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 100,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      // 375:{
      //   slidesPerView: 1,
      //       spaceBetween: 100,
      // },
      640: {
        slidesPerView: 1,
        spaceBetween: 100
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 100
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 200
      }
    }
  });
});
//# sourceMappingURL=all.js.map
