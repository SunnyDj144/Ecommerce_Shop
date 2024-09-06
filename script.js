const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const cartItems = [
      { name: 'Product 1', price: 19.99 },
      { name: 'Product 2', price: 29.99 }
  ];

  const cartItemsList = document.getElementById('cart-items');
  const totalPriceElem = document.getElementById('total-price');
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const closeModalBtn = document.querySelector('.close-btn');

  function updateCart() {
      cartItemsList.innerHTML = '';
      let total = 0;
      cartItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
          cartItemsList.appendChild(li);
          total += item.price;
      });
      totalPriceElem.textContent = total.toFixed(2);
  }

  function showModal() {
      checkoutModal.style.display = 'block';
  }

  function closeModal() {
      checkoutModal.style.display = 'none';
  }

  checkoutBtn.addEventListener('click', showModal);
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', function (event) {
      if (event.target === checkoutModal) {
          closeModal();
      }
  });

  document.getElementById('checkout-form').addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Payment submitted!');
      // You should replace this with actual payment processing logic.
      closeModal();
  });

  updateCart();
});

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});