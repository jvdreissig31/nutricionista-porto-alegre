window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.padding = "10px 20px";
        header.style.background = "rgba(255, 255, 255, 0.98)";
    } else {
        header.style.padding = "20px 50px";
        header.style.background = "rgba(255, 255, 255, 1)";
    }
});