let arr_18 = [-1, 2, 3, -9, 11];
function getMaxSubSum(ar) {
  console.log (ar);
  let sum ;
  let res = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = 0;
    for (let j = 0; j < ar.length; j++) {
      sum += ar[j];
      //console.log(sum);
       res = Math.max(sum);
    }
  }
  console.log(res);

}
getMaxSubSum(arr_18);