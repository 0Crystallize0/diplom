/* Анимация иконок навигации */
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        elem.querySelector('i').classList.add('animate-bounce');
    });

    elem.addEventListener('mouseout', () => {
        elem.querySelector('i').classList.remove('animate-bounce');
    })
});

/* Кнопка наверх */
(function() {
    function trackScroll() {
        const scrolled = window.scrollY;
        const coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('right-8');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('right-8');
        }
    }

    function backToTop() {
        if (window.scrollY > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    const goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();