let div3 =  document.querySelector ('.div3');
let x = false;
let but3 = document.querySelector ('.but3');
function consider (a, b, c, d) {
  if (a == d && b == c) {
    console.log (x = 'true');
  }
  else  {
    console.log (x);
  }
}
but3.onclick = consider(1,2,2,1);

//перевірка на дзеркальність числа