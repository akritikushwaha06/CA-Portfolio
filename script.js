const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

console.log(hamburger);
console.log(navLinks);

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});