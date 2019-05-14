(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  		var target = $(this.hash);
  		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  		if (target.length) {
  			$('html, body').animate({
  				scrollTop: (target.offset().top - 54)
  			}, 1000, "easeInOutExpo");
  			return false;
  		}
  	}
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
  	$('.navbar-collapse').collapse('hide');
  	$(".navbar-toggler .line1").removeClass("open1");
  	$(".navbar-toggler .line2").removeClass("open2");
  	$(".navbar-toggler .line3").removeClass("open3");
  });

  // Nav burger menu
  $(".navbar-toggler").click(function(){
  	$(".line1").toggleClass("open1");
  	$(".line2").toggleClass("open2");
  	$(".line3").toggleClass("open3");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
  	target: '#mainNav',
  	offset: 54
  });

  /* FAQ */

  $('.collapse').on('show.bs.collapse', function () {
  	$(this).parent().addClass("show");
  	$(this).parent().find("svg").addClass("show");
  })

  $('.collapse').on('hide.bs.collapse', function () {
  	$(this).parent().removeClass("show");
  	$(this).parent().find("svg").removeClass("show");
  })

  /* Partners */
  $('.owl-partners').owlCarousel({
    responsiveClass:true,
    margin:20,
    rewind:true,
    responsive:{
      0:{
        items:1,
      },
      500:{
        items:2,
      },
      600:{
        items:3,
      },
      800:{
        items:4,
      },
      1000:{
        items:6,
      }
    }
  })

})(jQuery); // End of use strict
