// Mobile navigation

const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Close mobile menu after selecting a link

document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });

  });


// Automatically show current year

document.getElementById("year").textContent =
  new Date().getFullYear();


// Simple gallery interaction

const galleryImages =
  document.querySelectorAll(".gallery-item img");

galleryImages.forEach((image) => {

  image.addEventListener("click", () => {
    window.open(image.src, "_blank");
  });

});