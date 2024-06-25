// Optional: Add JavaScript for additional interactivity or effects
window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        let offset = window.pageYOffset;
        section.style.backgroundPositionY = offset * 0.7 + 'px';
    });
});
