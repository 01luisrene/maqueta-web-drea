var $menu_mobile = $('#js_menu_mobile');
var $drea_js = (function ($) {
  //==========Buscador=====================
  var buscador = function(){
    $('.js_buscador').on('focus',  function(event) {
      event.preventDefault();
      $('.js_icono_buscador').css({
        color: '#6AABEE'
      });
    });
    $('.js_buscador').on('focusout',  function(event) {
      event.preventDefault();
      $('.js_icono_buscador').removeAttr('style');
    });
  },
  //==========Menú móvil=====================
  menu_mobile = function(){
    $('.js_block_menu').on('click', function(event) {
        event.preventDefault();
        $menu_mobile.css({
            display: 'block'
        });
        $menu_mobile.addClass('bounceInRight').removeClass('fadeOutRight');
    });
    $('#cerrar-menu-mobile').on('click', function(event) {
        event.preventDefault();
        $menu_mobile.css({
            display: 'none'
        });
        $menu_mobile.removeAttr('style');
        $menu_mobile.addClass('fadeOutRight').removeClass('bounceInRight');
        setTimeout(function(){ $menu_mobile.css('display', 'none'); }, 500);
    });
    //=======================Ocultar menu cuando es mayo 1000px==================
    $(window).resize(function() {
      var height = $(this).height();
      if($(this).width() > height){
        var width = $(this).width();
        $menu_mobile.css({
            display: 'none'
        });
      }
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
    menu_mobile();
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