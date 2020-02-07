$(document).ready(function(){
	$("#header, .info").ripples({
		dropRadius: 20,
		perturbance: 0.0,
	});
	
	$('.parent-container').magnificPopup({
		delegate: 'a',//child item selector, by clicking on it popup will open
		type: 'image',
		gallery:{
			enabled: true
		}
	});
	
	
});