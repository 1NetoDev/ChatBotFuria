document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.store-carousel-container');
    const carouselWrapper = document.querySelector('.store-carousel-wrapper');
    const cards = document.querySelectorAll('.store-product-card');
    const visibleItems = 5;
    let currentIndex = 0;
    let cardWidthWithMargin;

    if (carouselContainer && carouselWrapper && cards.length > visibleItems) {
        // Calcula a largura de um card incluindo sua margem direita
        const firstCardMarginRight = parseInt(window.getComputedStyle(cards[0]).marginRight) || 0;
        cardWidthWithMargin = cards[0].offsetWidth + firstCardMarginRight;

        // Define a largura do wrapper para acomodar todos os itens
        carouselWrapper.style.width = (cards.length * cardWidthWithMargin) + 'px';

        function nextSlide() {
            currentIndex++;
            // Se chegarmos ao final, volta para o início
            if (currentIndex > cards.length - visibleItems) {
                currentIndex = 0;
            }
            updateCarousel();
        }

        function updateCarousel() {
            const translateX = -currentIndex * cardWidthWithMargin;
            carouselWrapper.style.transform = `translateX(${translateX}px)`;
        }

        setInterval(nextSlide, 3000); // Troca de slide a cada 3 segundos
    } else if (carouselContainer) {
        // Se houver menos de 5 itens, centralize-os horizontalmente
        carouselContainer.style.display = 'flex';
        carouselContainer.style.justifyContent = 'center';
    }
});