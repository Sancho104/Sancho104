let header_burger = document.querySelector ('.header_burger');
let header_menu = document.querySelector ('.header_menu');
let body = document.querySelector ('body');
header_burger.onclick = () => {
  header_burger.classList.toggle('active_burger');
  header_menu.classList.toggle('active_menu');
  body.classList.toggle('lock');
}