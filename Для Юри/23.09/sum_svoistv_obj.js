let sum = 0;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function consider(object) {
  for (let key in object) {
   sum += object[key];
  }if (sum == 0|| sum) {
    return sum;
  }
}
console.log (consider(salaries));