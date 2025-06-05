document.addEventListener('DOMContentLoaded', function () {
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