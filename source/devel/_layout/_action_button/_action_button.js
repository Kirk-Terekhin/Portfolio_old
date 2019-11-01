document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function() {
        document.body.classList.toggle('unity_active');
    });
});