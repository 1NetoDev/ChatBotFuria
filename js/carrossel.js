document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container-screenshots');
    const slides = document.querySelectorAll('.carousel-slide-screenshots');
    const containerHeight = document.querySelector('.chatbot-screenshots').offsetHeight;
    let currentIndex = 0;

    function animateCarousel() {
        const slideHeight = slides[0].offsetHeight + 10; // Altura do slide + margem inferior
        const translateY = -currentIndex * slideHeight;
        carouselContainer.style.transform = `translateY(${translateY}px)`;

        currentIndex++;
        if (currentIndex > slides.length - 1) {
            currentIndex = 0; // Reinicia o carrossel
        }

        // Ajusta a velocidade da animação (intervalo em milissegundos)
        setTimeout(animateCarousel, 2000); // Altere 2000 para a velocidade desejada
    }

    // Inicia a animação após um pequeno delay para garantir que os elementos estejam carregados
    setTimeout(animateCarousel, 500);
});