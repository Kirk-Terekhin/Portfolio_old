document.addEventListener("DOMContentLoaded", function() {

	var button = document.querySelector('.hamburger');
	var nav = document.querySelector('.nav');
	button.addEventListener('click', function() {
		nav.classList.toggle('active');
		button.classList.toggle('hamburger__active');
	})

});
