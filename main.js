const line = document.getElementById("borderLine");
const nav = document.getElementById("nav");
const parent = document.getElementById("parent");
const btn = document.querySelector(".btn");

nav.addEventListener("mousemove", (e) => {
  line.style.left = e.clientX + "px";
  line.style.transition = "300ms";
});
