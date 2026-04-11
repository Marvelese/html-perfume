// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }
});
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 30) {
    nav.style.backgroundColor = "rgba(40, 30, 20, 0.9)";
    nav.style.backdropFilter = "blur(8px)";
  } else {
    nav.style.backgroundColor = "rgb(150, 143, 135)";
    nav.style.backdropFilter = "none";
  }
})
