document.addEventListener('DOMContentLoaded', () => {
    const popups = document.querySelectorAll('[data-carousel]');
    let active = null;

    [...popups].forEach(popup => {
        popup.addEventListener('click', () => openPopup(popup));
        document.querySelector('.carousel-popup-close').addEventListener('click', () => closePopup());
        document.addEventListener('keydown', (e) => e.key === "Escape" && closePopup());
    });

    function openPopup(popup) {
        const target = document.querySelector(popup.dataset.carousel);

        active = target;

        target.style.opacity = 1;
        target.style.visibility = 'visible';
    }

    function closePopup() {
        active.style.opacity = 0;
        active.style.visibility = 'hidden';
    }
})