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
  slider_main = function(){
    //=====================SLIDER MAIN==================
    $( '#slider-principal' ).sliderPro({
        width: 1200,
        height: 500,
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 200,
        thumbnailHeight: 100,
        thumbnailPointer: true,
        autoplay: false,
        autoScaleLayers: false,
        breakpoints: {
            500: {
                thumbnailWidth: 120,
                thumbnailHeight: 50
            }
        }
    });
  },
  eventos_comunicados_carousel = function(){
    $(".eventos-comunicados-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause:true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>' , '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        nav: true,
        dots: false,
        responsive:{
           0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true
            }
        }
    });
  },
  enlaces_interes_carousel = function(){
    $(".enlaces-interes-carousel").owlCarousel({
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
                items:1,
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
  small_carousel = function(){
    $('.small-carousel').owlCarousel({
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
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true
            }
      }
    });
  },
  video_carousel = function(){
    $('.video-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:1
            }
        }
    });
  },
  init = function () {
    buscador();
    menu_mobile();
    slider_main();
    eventos_comunicados_carousel();
    enlaces_interes_carousel();
    small_carousel();
    video_carousel();
  };

  return {
      init: init
  };

})(jQuery);

(function () {
    $drea_js.init();
})();