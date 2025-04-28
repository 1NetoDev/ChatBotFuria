document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header-main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link (salto imediato)

            const targetId = this.getAttribute('href'); // Obtém o ID do alvo (#quem-somos, #noticias, etc.)
            const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.main-header').offsetHeight,
                    behavior: 'smooth' // Ativa a rolagem suave
                });
            }
        });
    });
});