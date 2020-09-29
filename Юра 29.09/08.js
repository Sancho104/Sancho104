function sumInput() {
  let num;
  let ar = [];
  let sum = 0;
  while(true) {
    num = prompt('number, please', '');
    if (num === '' || num === null || !isFinite(num)) break;
    ar.push(+num);
  } 
  console.log(ar);
  for (num = 0; num < ar.length; num++) {
     sum += ar[num];
  }
  console.log(sum);
}
 sumInput();