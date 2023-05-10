const nav = document.getElementById("navigation");
const toTopButton = document.getElementById("button-to-top");

window.addEventListener("scroll", onScroll);

function onScroll() {
  changeNavOnScroll();
  showToTopButton();
}

function changeNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

function showToTopButton() {
  if (scrollY > 650) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}
