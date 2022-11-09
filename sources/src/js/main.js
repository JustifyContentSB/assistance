"use strict";

$(document).ready(function () {
   // Your code here
   sliderSwipe1()
   sliderSwipe2()
   regionList()
   modalShow()
   formInput()
   contentShow()
   contentSlide()
   blockquoteText()
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

function regionList() {
   $('.region').select2({
      placeholder: "Регион",
   });
}

function modalShow() {
   $('.js-login-btn').on('click', function (e) {
      e.preventDefault()
      $('.modal-login').addClass('modal--active')
      $('.overlay').addClass('overlay--active')
      $('body').addClass('no-scroll')
   })

   $('.js-credit-btn').on('click', function (e) {
      e.preventDefault()
      $('.modal-credit').addClass('modal--active')
      $('.overlay').addClass('overlay--active')
      $('body').addClass('no-scroll')
   })

   $('.modal__close').on('click', function (e) {
      e.preventDefault()
      $(this).parent('.modal').removeClass('modal--active')
      $('.overlay').removeClass('overlay--active')
      $('body').removeClass('no-scroll')
   })

   $('.overlay').on('click', function() {
      $('.modal').removeClass('modal--active')
      $('.overlay').removeClass('overlay--active')
      $('body').removeClass('no-scroll')
   })
}

function blockquoteText() {
   $('.blockquote__read').on('click', function(e) {
      let $this = $(this)

      e.preventDefault()
      $this.toggleClass('blockquote__read--toggled')
      $this.parent().find('.blockquote__text').toggleClass('blockquote__text--all')
   })
}

function formInput() {
   $('input').on('change', function () {
      if (this.value.length) {
         this.classList.add('full');
      } else {
         this.classList.remove('full');
      }
   })
}

function contentShow() {
   $('.content__top').click(function (e) {
      e.preventDefault();

      let $this = $(this);

      if ($this.next().hasClass('show')) {
         $this.next().removeClass('show')
         $this.next().slideUp(350)
         $this.find('.content__toggle').removeClass('content__toggle--active')
      } else {
         $this.find('.content__toggle').addClass('content__toggle--active')
         $this.parent().find('.num-list').removeClass('show')
         $this.parent().find('.num-list').slideUp(350)
         $this.next().toggleClass('show')
         $this.next().slideToggle(350)
      }
   });
}

function contentSlide() {
   $('.js-anchor[href^="#"]').bind("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top - -10
      }, 800);
      e.preventDefault();
   });
   return false;
}

