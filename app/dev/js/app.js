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
    $('.js_caja_buscador').on('keyup', function(event) {
      event.preventDefault();
      var value = $(this).val().length;
      if(value >= 3){
        $('.js_box_resultados').css('display', 'block');
      }else{
        $('.js_box_resultados').css('display', 'none');
      }
    });
  },
  menu_mobile = function(){
    $(".nav-icono,.nav-cover,.nav-cerrar").on("click", function(e){
        e.preventDefault();
        $("body").toggleClass("nav-opened nav-closed");
    });

    //Sirve para usar la misma plantilla de menu tanto en Desktop & mobile
    $('.nav-mobile .nav-main').removeClass('hidden-md-down d-flex').addClass('hidden-lg-up');

    //Función para mostrar efectos del menú solo en mobile
    $(window).resize(function(event) {
      var w = $( this ).width();
      if(w > 991){
        $('.nav-mobile').css({
          display: 'none'
        });
        $('body').addClass('window-resize');
      }else{
        $('.nav-mobile').removeAttr('style');
        $('body').removeClass('window-resize');
      }
    });
    //Coloca  fixed al menu 
    var ancho = $( window ).width();
    var menu_offset = $('.nav-desktop').offset();
    $(window).on("scroll", function() {
      if(ancho > 991){
        if($(window).scrollTop() > menu_offset.top) {
          $('.nav-desktop').addClass('fixed');
        }else{
          $('.nav-desktop').removeClass('fixed');
        }
      }
    });

  },
  //=====================SLIDER MAIN==================
  slider_main = function(){
    $( '.js_slider_main' ).sliderPro({
      width: 1140,
      height: 325,
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
        1000:{
          height: 450
        },
        800:{
          height: 500
        },
        500: {
          height: 600
        }
      }
    });
  },
  fotos_carousel = function(){
    $(".js_fotos_carousel").owlCarousel({
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
              items:1,
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
  lideres_carousel = function(){
    $('.js_lideres_carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause:true,
        navText: ['',''],
        nav: false,
        dots: true,
        responsive:{
          0:{
            items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
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
      items: 5,
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
  lista_sliders_carousel = function(){
    $(".js_lista_slides").owlCarousel({
      loop:true,
      margin:10,
      autoplay: true,
      smartSpeed: 800,
      autoplayHoverPause:true,
      dots: false,
      navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>' , '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      nav: true,
      items: 4,
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
            items:4,
            nav:true
        }
      }
    });
  },
  redes_sociales = function(){
    var altura_redes_sociales = $('.js_box_redes_sociales').height();
    $('.js_box_redes_sociales').css({
      marginTop: -(altura_redes_sociales / 2)
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
    $("#js_up").on('click', function (e) {
      e.preventDefault();
        $("body,html").animate({
        scrollTop: 0
      },1000);
      return false;
    });
  },
  //===  WOW ANIMATION ====
  animate_wow = function(){
    new WOW().init();
  },
  //SLIDE PAGINA INTERNA
  galeria_lightbox = function(){
    $(document).on('click', '.ekko-lightbox-close', function(event) {
      event.preventDefault();
      $(this).css('display', 'none');
      $('body').removeAttr('style').removeClass('modal-open');
      $('.modal-content').addClass('slideOutUp');
      setTimeout(function(){ 
        $('.modal-backdrop.fade.show, .ekko-lightbox.modal').remove();
      }, 500);
    }); 

  },
  load_slider = function(){
      $('.js_lista_sliders a').on('click', function(event) {
        event.preventDefault();
        var slider = $(this).data('slider-num');
        alert('slider número ' + slider);
      });
  },
  chat_drea = function(){
    $('.js_maximizar').on('click', function(event) {
      event.preventDefault();
      $('.body.chat').removeClass('slideOutDown').addClass('slideInUp');
      setTimeout(function(){
        $('.body.chat').css('display', 'block');
        $('.js_chat_drea').removeClass('minimizado');
        $('.js_minimizar').css('display', 'block');
        $('.js_maximizar').css('display', 'none');
      }, 300);
    });

    $('.js_minimizar').on('click', function(event) {
      event.preventDefault();
      $('.body.chat').removeClass('slideInUp').addClass('slideOutDown');
      setTimeout(function(){
        $('.body.chat').css('display', 'none');
        $('.js_chat_drea').addClass('minimizado');
        $('.js_maximizar').css('display', 'block');
        $('.js_minimizar').css('display', 'none');
      }, 300);
    });

    $('.js_show_chat').on('click',function(event) {
      event.preventDefault();
        $('.body.chat').removeClass('slideOutDown').addClass('slideInUp');
        setTimeout(function(){
          $('.body.chat').css('display', 'block');
          $('.js_chat_drea').removeClass('minimizado');
          $('.js_minimizar').css('display', 'block');
          $('.js_maximizar').css('display', 'none');
        }, 300);
    });
  },
  init = function () {
    buscador();
    menu_mobile();
    slider_main();
    fotos_carousel();
    videos_carousel();
    lideres_carousel();
    enlaces_interes_carousel();
    lista_sliders_carousel();
    redes_sociales();
    botonUp();
    animate_wow();
    galeria_lightbox();
    load_slider();
    chat_drea();
  };

  return {
      init: init
  };

})(jQuery);

(function () {
    $drea_js.init();
})();