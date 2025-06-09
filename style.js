document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 900,
        once: true
    });
    const slides = document.querySelectorAll('#auto-banner-slider .slide-item');
    let current = 0;
    let prev = null;
    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i === idx) {
                slide.classList.add('active');
            } else if (i === prev) {
                slide.classList.add('prev');
            }
        });
    }
    function nextSlide() {
        prev = current;
        current = (current + 1) % slides.length;
        showSlide(current);
    }
    setInterval(nextSlide, 3000);
    showSlide(current);
});

// Header fixed on scroll
window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});

AOS.init({
    duration: 900,
    once: true
});