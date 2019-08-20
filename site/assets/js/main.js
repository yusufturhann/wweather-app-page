import { $, Swiper } from "./vendors";

var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  loop: true,
  slidesPerView: 'auto',
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  nextButton: '.js-swiper-button-next',
  prevButton: '.js-swiper-button-prev',
  spaceBetween: 30,
  coverflow: {
    rotate: 5,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false
  }
});

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1100) {
    btn.fadeIn(100);
  } else {
    btn.fadeOut();
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1800);
});
var btn1 = $("#button2");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn1.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(document).height() }, 2000);
});