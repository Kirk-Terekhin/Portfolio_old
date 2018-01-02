document.addEventListener("DOMContentLoaded", function() {

	var about = document.querySelector('.about');
	var button = document.querySelector('.hamburger');
	var nav = document.querySelector('.nav');
	button.addEventListener('click', function() {
		about.classList.toggle('active');
		nav.classList.toggle('active');
		button.classList.toggle('hamburger__active');
	})

});
