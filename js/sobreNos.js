document.addEventListener('DOMContentLoaded', function() {
    const aboutUsCarouselContainer = document.querySelector('.carousel-container-about-us');
    const aboutUsSlides = document.querySelectorAll('.carousel-slide-about-us');
    let aboutUsCurrentIndex = 0;

    function nextAboutUsSlide() {
        // Remove a classe 'active' do slide atual
        aboutUsSlides[aboutUsCurrentIndex].classList.remove('active');

        // Calcula o índice do próximo slide
        aboutUsCurrentIndex = (aboutUsCurrentIndex + 1) % aboutUsSlides.length;

        // Adiciona a classe 'active' ao próximo slide
        aboutUsSlides[aboutUsCurrentIndex].classList.add('active');
    }

    // Inicia a animação em um intervalo regular (por exemplo, 5 segundos)
    setInterval(nextAboutUsSlide, 5000);
});