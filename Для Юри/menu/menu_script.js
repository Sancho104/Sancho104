let button_menu = document.querySelector ('.button_menu');
let menu = document.querySelector ('.menu');
button_menu.onclick = function () {
if (menu = document.querySelector ('.menu_a')) {
    menu.classList.add ('menu_b');
    menu.classList.remove ('menu_a');
  }
else if (menu = document.querySelector ('.menu_b')) {
    menu.classList.remove ('menu_b');
    menu.classList.add ('menu_a');
  }
}