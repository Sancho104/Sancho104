let i = document.querySelector('.in').value;      // додає введене значеня в Set
let sa = new Set ();
sa.add (2);
sa.add ('lalala');
let but4 = document.querySelector ('.but4');
but4.onclick = function func (i) {
  sa.add (i);
  console.log (sa);
}



let button_menu = document.querySelector ('.button_menu'); // випливаюче меню (при нажатті кнопки)
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

function f4 (str) {           // вертає введені дані задом наперед
  let spl = str.split ('');
  let rev = spl.reverse ('');
  let j = rev.join ('');
  return j;
}



let x1 = 3;
let y1 = 1;
let x2 = 2;
let y2 = 3;
 if (div3. innerHTML = Boolean (y1 == y2 && x2 >=1 && x2 <= 8)) {     //перевірка, чи може ладья ходити на деяке поле

 }else if (div3. innerHTML = Boolean (x1 == x2 && y2 >= 1 && y2 <= 8)) {}

div3. innerHTML = Boolean ( Math.abs (x2 - x1) == Math.abs(y2 - y1));    // слон

div3.innerHTML = Boolean ( (Math.abs (y2 - y1) == 2) && (Math.abs (x2 - x1) == 1) || (Math.abs (y2 - y1) == 1) && (Math.abs (x2 - x1) == 2));     // кінь


let i = 2100;                             //перевіряє, чи високосний рік
if (i % 100 == 0 && i % 400 != 0) {
  console.log ('365');
}else if (i % 4 == 0 ) {
  console.log ('366');
}else {
  console.log ('365');
}



let div3 =  document.querySelector ('.div3');       //перевіряє, чи напиане число є дзеркальним (напр, 4994), чи ні
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



let div = document.querySelector ('.crap');
let but = document.querySelector ('.but');
but.onclick = function f1 ()  {
  div.style.width = '200px';
  div.style.color = 'blue';
  div.style.background = 'grey';






