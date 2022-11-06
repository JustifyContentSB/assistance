"use strict";

$(document).ready(function () {
   // Your code here
   sliderSwipe1()
   sliderSwipe2()
});

// Your functions here

function sliderSwipe1() {
   var swiper = new Swiper(".slider__swiper-1", {
      slidesPerView: 'auto',
      spaceBetween: 12,
      navigation: {
         nextEl: ".slider__next-1",
         prevEl: ".slider__prev-1",
      },
      breakpoints: {
         768: {
            spaceBetween: 20,
         },
         1230: {
            slidesPerView: 4,
            spaceBetween: 20,
         },
      },
   });
}

function sliderSwipe2() {
   var swiper = new Swiper(".slider__swiper-2", {
      slidesPerView: 'auto',
      spaceBetween: 12,
      navigation: {
         nextEl: ".slider__next-2",
         prevEl: ".slider__prev-2",
      },
      breakpoints: {
         768: {
            spaceBetween: 20,
         },
         1230: {
            slidesPerView: 4,
            spaceBetween: 20,
         },
      },
   });
}