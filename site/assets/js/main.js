import { $ } from "./vendors";
 


$(".carousel").slick({
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    prevArrow: `

    
    
    <button class="carousel__btn carousel__btn--left" type="button">
        <img class="left" src="assets/img/icons/left-arrow.png"  title="left"/>
    </button>
    `,
    nextArrow: `
    <button class="carousel__btn carousel__btn--right" type="button">
        <img class="right" src="assets/img/icons/right-arrow.png"   title="right"/>
    </button>
    `,
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() >= 1100) {
    btn.fadeIn(100);
     
  } else {
    btn.fadeOut();
     
    
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 1800);
  
});
var btn1 = $('#button2');

$(window).scroll(function() {
  
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
   

  }
});

btn1.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:  $(document).height() }, 2000);
});


$('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if(currentSlide == 0){
        $('.carousel__item--front').removeClass('push-right');
        $('.carousel__item--right').removeClass('get-center');
    }
    else if(currentSlide == 1) {
        $('.carousel__item--left').removeClass('get-center');
        $('.carousel__item--front').removeClass('push-left');
        $('.carousel__item--right').removeClass('push-right');

       $('.carousel__item--front').addClass('push-right');
       $('.carousel__item--right').addClass('get-center');
    } else if(currentSlide == 2) {
        $('.carousel__item--front').removeClass('push-right');
        $('.carousel__item--right').removeClass('get-center');

        $('.carousel__item--left').addClass('get-center');
        $('.carousel__item--front').addClass('push-left');
        $('.carousel__item--right').addClass('push-right');
        
        }});
        
 

 

 
