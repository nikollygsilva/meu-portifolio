document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os elementos que devem ter a animação de fade-in
    const fadeElements = document.querySelectorAll('.fade-in');

    // Configurações do Intersection Observer
    const observerOptions = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1 // O elemento é considerado visível quando 10% dele aparece
    };

    // Cria o observador
    const fadeInObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação CSS
                entry.target.classList.add('visible');
                // Para de observar o elemento para não repetir a animação
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplica o observador a cada um dos elementos selecionados
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });

});