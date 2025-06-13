document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector('.hero-section');
    const fadeIns = document.querySelectorAll('.fade-in');

    setTimeout(() => {
        heroSection.classList.add('visible');
    }, 500);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeIns.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productUrl = card.getAttribute('data-url');
            if (productUrl) {
                window.location.href = productUrl;
            }
        });
    });
});