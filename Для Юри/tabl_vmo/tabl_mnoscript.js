let div3 = document.querySelector ('.div3');
for (let i = 1; i < 11; i++) {
  for (let k = 1; k < 11; k++) {
    div3.innerHTML += k +'*'+ i + '=' + (i * k) + '<br>';
  }
}