var $drea_js = (function ($) {
  //==========Buscador=====================
  var buscador = function(){
    $('.js_caja_buscador').on('focus',  function(event) {
      event.preventDefault();
      $('.js_icono_buscador').css({
        color: '#5cb3fd'
      });
    });
    $('.js_caja_buscador').on('focusout',  function(event) {
      event.preventDefault();
      $('.js_icono_buscador').removeAttr('style');
    });
  },
  //=====================SLIDER MAIN==================
  slider_main = function(){
    $( '.js_slider_main' ).sliderPro({
        width: 1110,
        height: 500,
        fullScreen: true,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 200,
        thumbnailHeight: 100,
        thumbnailPointer: true,
        autoplay: true,
        autoScaleLayers: false,
        breakpoints: {
            500: {
                thumbnailWidth: 120,
                thumbnailHeight: 50
            }
        }
    });
  },
  small_carousel = function(){
    $(".js_small_carousel").owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause:true,
        height:450,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>' , '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        nav: true,
        dots: false,
        responsive:{
          0:{
            items:1,
            nav:true
          },
          600:{
              items:3,
              nav:true
          },
          1000:{
              items:1,
              nav:true
          }
        }
    });
  },
  enlaces_interes_carousel = function(){
    $(".js_enlaces_interes").owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause:true,
        dots: false,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>' , '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        nav: true,
        responsive:{
           0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true
            }
      }
    });
  },
  videos_carousel = function(){
    $('.js_videos_slider').bxSlider({
      video: true,
      pager: false,
      useCSS: true
    });
  },
  botonUp = function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 300){
        $("#js_up").slideDown(300);
      }else{
        $("#js_up").slideUp(300);
      }
    });
    $("#js_up i").on('click', function (e) {
      e.preventDefault();
        $("body,html").animate({
        scrollTop: 0
      },1000);
      return false;
    });
  },
  init = function () {
    buscador();
    slider_main();
    small_carousel();
    enlaces_interes_carousel();
    videos_carousel();
    botonUp();
  };

  return {
      init: init
  };

})(jQuery);

(function () {
    $drea_js.init();
})();