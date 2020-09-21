let i = document.querySelector('.in').value;
let sa = new Set ();
sa.add (2);
sa.add ('lalala');
let but4 = document.querySelector ('.but4');
but4.onclick = function func (i) {
  sa.add (i);
  console.log (sa);
}
