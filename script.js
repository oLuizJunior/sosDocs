const hamburger = document.getElementById("hamburguer");
const navbarNav = document.getElementById("navbar-colapse");
const navbarRight = document.getElementById("navbar-right");

hamburguer.addEventListener("click", () => {
  navbarNav.classList.toggle("show");
  navbarRight.classList.toggle("show");
});
