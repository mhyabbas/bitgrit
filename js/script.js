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
  	offset: 84
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("show");
    } else {
      $("#mainNav").removeClass("show");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  /* FAQ */

  $('.collapse').on('show.bs.collapse', function () {
  	$(this).parent().addClass("show");
  	$(this).parent().find("svg").addClass("show");
  })

  $('.collapse').on('hide.bs.collapse', function () {
  	$(this).parent().removeClass("show");
  	$(this).parent().find("svg").removeClass("show");
  })

  /* Team */
  $('.owl-core').owlCarousel({
    responsiveClass:true,
    margin:20,
    nav:true,
    navText: ['<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="460,530.874 1,265.87 460,0.866 "/></svg>', '<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="0.5,0.866 459.5,265.87 0.5,530.874 "/></svg>'],
    rewind:true,
    responsive:{
      0:{
        items:1,
      },
      500:{
        items:2,
      },
      800:{
        items:3,
      },
      1000:{
        items:4,
      }
    }
  })

  $('.owl-cofounders').owlCarousel({
    responsiveClass:true,
    margin:20,
    nav:true,
    navText: ['<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="460,530.874 1,265.87 460,0.866 "/></svg>', '<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="0.5,0.866 459.5,265.87 0.5,530.874 "/></svg>'],
    rewind:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:2,
      }
    }
  })

  $('.owl-development').owlCarousel({
    responsiveClass:true,
    margin:20,
    nav:true,
    navText: ['<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="460,530.874 1,265.87 460,0.866 "/></svg>', '<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="0.5,0.866 459.5,265.87 0.5,530.874 "/></svg>'],
    rewind:true,
    responsive:{
      0:{
        items:1,
      },
      500:{
        items:2,
      },
      800:{
        items:3,
      },
      1000:{
        items:4,
      }
    }
  })

  $('.owl-community').owlCarousel({
    responsiveClass:true,
    margin:20,
    nav:true,
    navText: ['<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="460,530.874 1,265.87 460,0.866 "/></svg>', '<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="0.5,0.866 459.5,265.87 0.5,530.874 "/></svg>'],
    rewind:true,
    responsive:{
      0:{
        items:1,
      },
      500:{
        items:2,
      },
      800:{
        items:3,
      },
      1000:{
        items:4,
      }
    }
  })

  $('.owl-marketing').owlCarousel({
    responsiveClass:true,
    margin:20,
    nav:true,
    navText: ['<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="460,530.874 1,265.87 460,0.866 "/></svg>', '<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="0.5,0.866 459.5,265.87 0.5,530.874 "/></svg>'],
    rewind:true,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:2,
      }
    }
  })

  $('.owl-hr').owlCarousel({
    responsiveClass:true,
    margin:20,
    nav:true,
    navText: ['<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="460,530.874 1,265.87 460,0.866 "/></svg>', '<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="0.5,0.866 459.5,265.87 0.5,530.874 "/></svg>'],
    rewind:true,
    responsive:{
      0:{
        items:1,
      }
    }
  })

  $('.owl-advisors').owlCarousel({
    responsiveClass:true,
    margin:20,
    nav:true,
    navText: ['<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="460,530.874 1,265.87 460,0.866 "/></svg>', '<svg mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.5 531.74"><polygon points="0.5,0.866 459.5,265.87 0.5,530.874 "/></svg>'],
    rewind:true,
    responsive:{
      0:{
        items:1,
      },
      500:{
        items:2,
      },
      800:{
        items:3,
      },
      1000:{
        items:4,
      }
    }
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

  /* Disable Parallax on devices */
  var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  if (ismobile){
    $('#call-to-action').css('background-attachment','scroll');
    $('#newsletter').css('background-attachment','scroll');
  }

})(jQuery); // End of use strict
