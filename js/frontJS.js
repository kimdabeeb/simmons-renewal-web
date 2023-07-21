'use strict';

// swiper slide
const special_preview_slide = function () {
  const container = document.querySelector('.special-preview-section');
  const img_con = container.querySelector('.special-preview-slide');
  const img_wrapper = img_con.querySelector('.slide-wrapper');
  const slide = img_wrapper.querySelector('.slide');

  function slide_setting() {
    function sldie_position() {
      img_wrapper.prepend(slide[slide.length - 1]);
      img_wrapper.prepend(slide[slide.length - 2]);
      img_wrapper.prepend(slide[slide.length - 3]);
    }
    sldie_position();
  }
  slide_setting();

  function size_setting() {
    slide.forEach(function (slideItem) {
      if (slideItem.classList.contains('active')) {
        slideItem.style.width = (img_con.offsetWidth * 32) / 100 - 30 + 'px';
      } else if (
        slideItem.classList.contains('prev') ||
        slideItem.classList.contains('next')
      ) {
        slideItem.style.width = (img_con.offsetWidth * 17.5) / 100 - 30 + 'px';
      } else {
        slideItem.style.width = (img_con.offsetWidth * 16.5) / 100 - 30 + 'px';
      }
    });
    img_wrapper.style.left = (-img_con.offsetWidth * 16.5) / 100 + 'px';
  }
  size_setting();

  function classSet() {
    slide.forEach(function (slideItem) {
      slideItem.classList.remove('active');
      slideItem.classList.remove('prev');
      slideItem.classList.remove('next');
    });
    slide[3].classList.add('active');
    slide[2].classList.add('prev');
    slide[4].classList.add('next');
  }

  function next_animation() {
    img_wrapper.appendChild(slide[0]);
    classSet();
    size_setting();
    img_wrapper.style.left = 0;
    img_wrapper.style.left = (-img_con.offsetWidth * 16.5) / 100 + 'px';
  }
  next_animation();
  setTimeout(function () {
    next_animation();
  }, 6000);
};

// swiper Gallery
const basic_slide_ui = function () {
  const basicSwiper = new Swiper('.basic-slide-wrap', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      prevEl: '.slide-control .prev',
      nextEl: '.slide-control .next',
    },
    on: {
      slideChangeTransitionEnd: function () {
        const current_txt = document.querySelector(
          '.basic-slide-wrap .current'
        );
        let realIndex = this.realIndex + 1;
        if (realIndex < 10) {
          current_txt.textContent = '0' + realIndex;
        } else {
          current_txt.textContent = realIndex;
        }
      },
    },
  });

  const total_txt = document.querySelector('.basic-slide-wrap .total');
  const slide_length =
    document.querySelectorAll('.basic-slide-wrap .swiper-slide').length - 2;
  if (slide_length < 10) {
    total_txt.textContent = '0' + slide_length;
  } else {
    total_txt.textContent = slide_length;
  }

  const control_btn = function () {
    const prev = document.querySelector('.swiper-page-box .swiper-prev');
    const next = document.querySelector('.swiper-page-box .swiper-next');
    prev.addEventListener('click', function () {
      basicSwiper.slidePrev();
    });
    next.addEventListener('click', function () {
      basicSwiper.slideNext();
    });
  };
  control_btn();
};

if (document.querySelectorAll('.basic-slide-wrap').length > 0) {
  basic_slide_ui();
}

const main_slide_ui = function () {
  const basicSwiper = new Swiper('.main-slide-wrap', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
    loop: true,
    navigation: {
      prevEl: '.slide-control .prev',
      nextEl: '.slide-control .next',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      slideChangeTransitionEnd: function () {
        const current_txt = $('.main-slide-wrap').find('.current');
        let realIndex = this.realIndex + 1;
        if (realIndex < 10) {
          current_txt.text('0' + realIndex);
        } else {
          current_txt.text(realIndex);
        }
      },
    },
  });
  const total_txt = $('.main-slide-wrap').find('.total');
  const slide_lenght = $('.main-slide-wrap').find('.swiper-slide').length - 2;
  if (slide_lenght < 10) {
    total_txt.text('0' + slide_lenght);
  } else {
    total_txt.text(slide_lenght);
  }
  const control_btn = function () {
    const prev = $('.swiper-page-box .swiper-prev'),
      next = $('.swiper-page-box .swiper-next');
    prev.click(function () {
      basicSwiper.slidePrev();
    });
    next.click(function () {
      basicSwiper.slideNext();
    });
  };
  control_btn();
};
if ($('.main-slide-wrap').length > 0) {
  main_slide_ui();
}

const main_thumb_slide = function () {
  const basicSwiper = new Swiper('.main-thumb-slide', {
    effect: 'fade',
    speed: 500,
    loop: true,
    navigation: {
      prevEl: '.main-thumb-container .slide-control .prev',
      nextEl: '.main-thumb-container .slide-control .next',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const control_btn = function () {
    const prev = $('.main-thumb-container .prev'),
      next = $('.main-thumb-container .next');
    prev.click(function () {
      basicSwiper.slidePrev();
    });
    next.click(function () {
      basicSwiper.slideNext();
    });
  };
  control_btn();
};
if ($('.main-wrap').length > 0) {
  main_thumb_slide();
}

const special_preview_swiper = function () {
  const basicSwiper = new Swiper('.special-preview-slide', {
    speed: 500,
    spaceBetween: 0,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      prevEl: '.slide-control .prev',
      nextEl: '.slide-control .next',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      slideChangeTransitionStart: function () {
        const txt_wrap = document.querySelector(
          '.special-preview-section .txt-wrap'
        );
      },
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
    },
  });
};
special_preview_swiper();

if (document.querySelectorAll('.special-preview-section').length > 0) {
  special_preview_swiper();
}
