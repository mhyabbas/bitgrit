$(document).ready(function() {
	$('.form-group').find('input, textarea').on('keyup blur focus', function(e){ 
	    var $this = $(this);
	    var $parent = $this.parent();

	    if (e.type == 'keyup') {
			if($this.val() == '') {
			    $parent.removeClass('show'); 
			} else {
			    $parent.addClass('show');   
			}              
	    } 
	});
});