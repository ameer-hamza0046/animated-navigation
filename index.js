const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});
