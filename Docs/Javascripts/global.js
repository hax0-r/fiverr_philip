const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


const navToggle = document.getElementById('navToggle');
const resNav = document.getElementById('resNav');

navToggle.addEventListener('change', () => {
    resNav.style.height = navToggle.checked ? "100%" : "0%";
});

