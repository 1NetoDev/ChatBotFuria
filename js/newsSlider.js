document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide-screenshots');
    let currentIndex = 0;

    // Garante que pelo menos um slide esteja visível inicialmente
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    function nextSlide() {
        // Remove a classe 'active' do slide atual
        slides[currentIndex].classList.remove('active');

        // Calcula o índice do próximo slide
        currentIndex = (currentIndex + 1) % slides.length;

        // Adiciona a classe 'active' ao próximo slide
        slides[currentIndex].classList.add('active');
    }

    // Define o intervalo para trocar os slides (3 segundos = 3000 milissegundos)
    setInterval(nextSlide, 3000);
});