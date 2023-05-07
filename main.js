const nav = document.getElementById("navigation");

window.addEventListener("scroll", onScroll);

function onScroll() {
  changeNavOnScroll();
}

function changeNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}
