$(function() {
	$(".toggle a").on("click", function(e) {
		e.preventDefault();
		if ($(".item").hasClass("active")) {
			$(".item").removeClass("active");
			$(".toggle-open").show();
			$(".toggle-close").hide();
		} else {
			$(".item").addClass("active");
			$(".toggle-close").show();
			$(".toggle-open").hide();
		}
	});

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 10) {
			$(".nav").addClass("scroll");
		} else {
			$(".nav").removeClass("scroll");
		}
	});

});