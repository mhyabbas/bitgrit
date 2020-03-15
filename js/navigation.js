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
});