const headerNav = document.querySelector(".headerNav ul");
const toggleMenu = document.querySelector(".toggleMenu");
const backdrop = document.querySelector(".transparent");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  backdrop.classList.toggle("open");
});
