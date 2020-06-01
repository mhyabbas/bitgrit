$(document).ready(function() {

	// Variables
	var modalLinks = $('.modal-link');
	var modal = $('.modal');

	// Add click event to each modal link
	modalLinks.each(function(index, element) {
		var currentItem = $(element);

		// Open modal
		currentItem.click(function(e) {
			e.preventDefault();
			modal.eq(index).show();
			$("body").addClass("modal-open");
			$(".modal-backdrop").addClass("show");
		});

		// Close modal with cross button
		modal.find(".modal-close").click(function(e) {
			e.preventDefault();
			$("body").removeClass("modal-open");
			$(".modal-backdrop").removeClass("show");
			modal.eq(index).hide();
		});

		// Close modal with CTA button
		modal.find(".btn").click(function() {
			$("body").removeClass("modal-open");
			$(".modal-backdrop").removeClass("show");
			modal.eq(index).hide();
		});

	});

	// Remove modal backdrop
	$(".modal").bind('click', function(e) {
		if(!$(e.target).is('.modal-dialog *')) {
			$("body").removeClass("modal-open");
			$(".modal-backdrop").removeClass("show");
			$(".modal").hide();
		}
	});

});