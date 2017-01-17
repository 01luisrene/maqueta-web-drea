$( document ).ready(function() {
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

    $('.js_block_menu').on('click', function(event) {
        event.preventDefault();
        $('.box-menu-mobile').css({
            display: 'block'
        });
    });
    $('#cerrar-menu-mobile').on('click', function(event) {
        event.preventDefault();
        $('.box-menu-mobile').css({
            display: 'none'
        });
    });
    //=====================SLIDER MAIN==================
    $( '#slider-principal' ).sliderPro({
        width: 1200,
        height: 500,
        fade: true,
        arrows: true,
        buttons: false,
        fullScreen: true,
        shuffle: true,
        smallSize: 500,
        mediumSize: 1000,
        largeSize: 3000,
        thumbnailArrows: true,
        autoplay: true
    });
    
    $(".slider-eventos-comunicados").owlCarousel({
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
    $(".slider-enlaces-interes").owlCarousel({
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
});