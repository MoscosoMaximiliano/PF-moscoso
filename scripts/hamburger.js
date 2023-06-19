const navEl = document.getElementById("navbar");
const hamburgerEl = document.getElementById("hamburger");

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle("nav-open")
    hamburgerEl.classList.toggle("hamburger-open")
})