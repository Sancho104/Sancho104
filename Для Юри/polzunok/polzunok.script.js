 let but = document.querySelector (".button12");



but.onclick = function () {
  console.log (document.querySelector('#one').value);
  but.style.backgroundColor = document.querySelector('#one').value;
}
document.querySelector('#one').oninput = () => {
  console.log (document.querySelector('#one').value); 
  document.querySelector ("span").innerHTML = document.querySelector('#one').value;
}

//відкрий консоль