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

    $(".owl-carousel").owlCarousel({
    	loop:true,
	    margin:10,
	    responsiveClass:true,
	    autoplay: true,
	    smartSpeed: 800,
	    autoplayHoverPause:true,
	    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>' , '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	    dots: true,
        nav: true,
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
            nav:true,
            loop:true
        }
      }
    });
    $(".slider-eventos-comunicados").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause:true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>' , '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        dots: false,
        responsive:{
           0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
      }
    });
    $(".slider-enlaces-interes").owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause:true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>' , '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        items:8,
        nav: true
    });
});