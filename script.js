document.addEventListener("DOMContentLoaded", () => {

  const nav = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");

  /* NAV */
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  /* SCROLL NAV */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      nav.style.backgroundColor = "rgba(40,30,20,0.9)";
    } else {
      nav.style.backgroundColor = "rgba(75,45,10,0.85)";
    }
  });

  /* REVEAL */
  const reveals = document.querySelectorAll(".reveal");

  function reveal() {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

  /* CART */
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  }

  function addToCart(name, price) {
    cart.push({ name, price });
    saveCart();
    alert(name + " added to cart");
  }

  function updateCart() {
    const count = document.getElementById("cart-count");
    const items = document.getElementById("cart-items");

    if (count) count.innerText = cart.length;

    if (items) {
      items.innerHTML = cart.map(i =>
        `<p>${i.name} - $${i.price}</p>`
      ).join("");
    }
  }

  window.addToCart = addToCart;

  updateCart();
});
