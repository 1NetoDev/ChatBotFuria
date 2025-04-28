document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide-screenshots');
    let currentIndex = 0;

    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    setInterval(nextSlide, 3000);
});