$(document).ready(function() {
	$('div').mouseenter(function() {
		$(this).css('border-color', 'white');
	});
	$('div').mouseleave(function() {
		$(this).css('border-color', 'black')
	})
	$('input').mouseenter(function() {
		$(this).css('glowing-border', 'border: 2px solid #dadada',
         border-radius: 7px');
	});
	$('input').mouseleave(function() {
		$(this).css('glowing-border', 'border: 0px',
         'border-radius: 0px')
	})
});
