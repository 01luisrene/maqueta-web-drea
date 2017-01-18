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
});