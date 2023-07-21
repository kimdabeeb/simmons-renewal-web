'use strict';

/* scroll */
function scroll_btn_click() {
  const scroll_btn = document.querySelector('.scroll-btn');
  const target = document.querySelector('.scroll-target');
  scroll_btn.addEventListener('click', function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: target.offset().top }, 1200);
  });
}
scroll_btn_click();

/* scroll-obj */
const scroll_effect = function () {
  const scroll_obj = document.querySelectorAll('.scroll-obj');

  window.addEventListener('scroll', function () {
    scroll_obj.forEach(function (obj) {
      if (window.scrollY + window.innerHeight > obj.offsetTop + 30) {
        obj.classList.add('on');
      }
    });
  });
  window.dispatchEvent(new Event('scroll'));
};
scroll_effect();

/* header */
const header_fixed_animate = function () {
  let duration;

  function calc_duration() {
    if ($(window).width() > 700) {
      duration = $('.con1').innerHeight();
    } else {
      duration = 60;
    }
  }

  calc_duration();

  $(window).on('resize', function () {
    calc_duration();
  });

  function fixed_trigger() {
    if ($(window).scrollTop() >= duration) {
      $('.hd').addClass('fixed');
    } else {
      $('.hd').removeClass('fixed');
    }
  }

  fixed_trigger();

  $(window).on('scroll', function () {
    fixed_trigger();
  });
};

header_fixed_animate();

// main video resize response
const main_vdo_size = function () {
  const vdo_con = document.querySelector('.top-vdo-wrap .top-vdo');
  if (vdo_con.innerWidth >= vdo_con.innerHeight * 1.7853) {
    vdo_con.classList.add('horizon');
    vdo_con.classList.remove('vertical');
  } else {
    vdo_con.classList.add('vertical');
    vdo_con.classList.remove('horizon');
  }
};

$(window).resize(function () {
  main_vdo_size();
});
if ($('.top-vdo-wrap').length > 0) {
  main_vdo_size();
}

const top_img_size = function () {
  const inner_con = container.find('.inner-con');
  const top_img = container.find('.top-img');

  function width_calc() {
    const inner_width = inner_con.innerWidth();
    const window_width = $(window).innerWidth();

    const img_width = inner_width + parseInt(window_width - inner_width) / 2;
    top_img.css('width', img_width);
  }
  width_calc();
  $(window).on('resize', function () {
    width_calc();
  });
};

// vidoepage resize
const vdo_ui = function () {
  if (document.querySelectorAll('.movie-wrap').length > 0) {
    const vdo_width = document.querySelector(
      '.movie-wrap .vdo-wrap'
    ).offsetWidth;
    const vdo_height = vdo_width * 0.563;
    document.querySelector('.movie-wrap .con2 iframe').style.width =
      vdo_width + 'px';
    document.querySelector('.movie-wrap .con2 iframe').style.height =
      vdo_height + 'px';
  }
};
vdo_ui();
