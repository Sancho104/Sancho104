let arr_15 = [5, 3, 8, 1];

function filterRangeInPlace(ar, a, b) {
 for (let i = 0; i < ar.length; i++) {
   let f = ar[i];
   if (f < a || f > b) {
     ar.splice(i, 1);
     i--;
   }
 }
}
filterRangeInPlace(arr_15, 1, 4);
console.log (arr_15);