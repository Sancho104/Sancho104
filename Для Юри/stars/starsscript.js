let out = document.querySelector ('.out');
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < 10; k++) {
    if (i == 1 && k == 9) break;
    if (i == 2 && k == 8) break;
    if (i == 3 && k == 7) break;
    if (i == 4 && k == 6) break;
    out.innerHTML += '*';
    
  }
out.innerHTML +='<br/>';
}