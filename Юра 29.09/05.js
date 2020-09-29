let arr_15 = [5, 3, 8, 1];

function filterRange(ar, a, b) {
  let filt = ar.filter((c) => {
    return (c >= a && c <= b);
  });
  return filt;
}
console.log(filterRange(arr_15, 1, 4))