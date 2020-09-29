let arr_16 = ["HTML", "JavaScript", "CSS"];

function copySorted(ar) {
  let sorted = ar.concat();
  sorted.sort(f22);
  function f22 (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a == b) return 0;
  }
  console.log(sorted);
}
copySorted(arr_16);
console.log(arr_16);