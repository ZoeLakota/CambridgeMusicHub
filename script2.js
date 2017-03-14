$(document).ready(function(){
	$('input').mouseenter(function() {
		$(this).css('glowing-border', 'border: 2px solid #dadada',
         'border-radius: 7px');
	});
	$('input').mouseleave(function() {
		$(this).css('glowing-border', 'border: 0px',
         'border-radius: 0px')
	})