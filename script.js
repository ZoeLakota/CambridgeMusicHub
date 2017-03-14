$(document).ready(function() {
	$('div').mouseenter(function() {
		$(this).css('border-color', 'white');
	});
	$('div').mouseleave(function() {
		$(this).css('border-color', 'black')
	})
	$('input').mouseenter(function() {
		$(this).css('border-color', 'white');
	});
	$('input').mouseleave(function() {
		$(this).css('border-color', 'black')
	})
});
