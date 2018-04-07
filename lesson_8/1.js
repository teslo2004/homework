const menu = document.getElementById("menu");
const html = document.querySelector("html");
const width = parseInt(getComputedStyle(menu).width);
const height = parseInt(getComputedStyle(menu).height);
html.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  const htmlWidth = html.clientWidth;;
  const htmlHeight = html.clientHeight;
  const x = e.clientX;
  const y = e.clientY;
  menu.style.display = "block";
  if (x + width > htmlWidth)
    menu.style.left = x - width + "px";
  else menu.style.left = x + "px";

  if (y + height > htmlHeight)
    menu.style.top = y - height + "px";
  else menu.style.top = y + "px";
});
html.addEventListener("click", function(e) {
  menu.style.display = "none";
});
menu.addEventListener("click", function(e) {
  e.stopPropagation();
})
