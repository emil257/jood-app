$('.logo-carousel').owlCarousel({
  loop:true,
  margin:40,
  nav:true,
  dots: false,
  grab: false,
  navText: [" ", " "],
  responsive:{
    0:{
      items:1
    },
    768:{
      items:2
    },
    992:{
      items:3
    },
    1200:{
      items:4
    }
  }
})

var swiper = new Swiper('.swiper-container', {
  effect: 'slide',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  on: {
    slideChange: function () {
      var activeIndex = this.activeIndex;
      var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
     $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
     $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-nth-prev-2');
     $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-nth-next-2');
    },
  },
  breakpoints: {
    // when window width is <= 499px
    300: {
        slidesPerView: 3
    },
    // when window width is <= 999px
    1200: {
        slidesPerView: 5
    }
}
});

AOS.init();
