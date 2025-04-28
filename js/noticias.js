document.addEventListener('DOMContentLoaded', function() {
    const newsCarouselContainer = document.querySelector('.news-carousel-container');
    const newsCarouselWrapper = document.querySelector('.news-carousel-wrapper');
    const newsItems = document.querySelectorAll('.news-item');
    if (!newsItems || newsItems.length === 0) {
        console.error("Não foram encontrados elementos com a classe '.news-item'.");
        return;
    }
    const itemWidth = newsItems[0].offsetWidth + 20; // Largura do item + margens
    const totalItems = newsItems.length;
    let currentIndex = 0;
    let isTransitioning = false;
    const transitionDuration = 500; // Duração da transição em ms (ajuste conforme o seu CSS)

    // Clone os primeiros itens e adicione ao final para o loop infinito
    for (let i = 0; i < totalItems; i++) {
        const clonedItem = newsItems[i].cloneNode(true);
        newsCarouselWrapper.appendChild(clonedItem);
    }

    const allItems = document.querySelectorAll('.news-item'); // Recalcula todos os itens

    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        const translateX = -currentIndex * itemWidth;
        newsCarouselWrapper.style.transition = `transform ${transitionDuration}ms ease-in-out`;
        newsCarouselWrapper.style.transform = `translateX(${translateX}px)`;

        // Quando chegar ao final dos itens originais, transiciona instantaneamente de volta ao início
        setTimeout(() => {
            if (currentIndex >= totalItems) {
                newsCarouselWrapper.style.transition = 'none';
                currentIndex = 0;
                newsCarouselWrapper.style.transform = `translateX(0px)`;
            }
            isTransitioning = false;
        }, transitionDuration);
    }

    // Inicia a animação em um intervalo regular de 4 segundos
    setInterval(nextSlide, 4000);

    // Garante que o wrapper esteja inicialmente posicionado corretamente
    newsCarouselWrapper.style.transform = `translateX(0px)`;
});