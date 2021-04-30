const sidebar = document.querySelector(".loc-sidebar-wrapper");
const hamMenu = document.querySelector(".ham-menu");
const overLay = document.querySelector(".overlay-div");
const body = document.querySelector("body");

hamMenu.addEventListener("click", () => {
  sidebar.classList.toggle("hidden-sidebar");
  overLay.classList.toggle("overlay");
  body.classList.toggle("overflow-class");
});

overLay.addEventListener("click", () => {
  sidebar.classList.toggle("hidden-sidebar");
  overLay.classList.toggle("overlay");
  body.classList.toggle("overflow-class");
});
// console.log(body);
