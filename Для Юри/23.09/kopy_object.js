let object = {
  one : 5,
  two : 10,
  three : 'numder',
  sur : {
    tra : 55,
    nn : 23,
  }
}
let clone = {
  here : "along",
};

for (let key in object) {
  if (typeof object[key] == object) {
    for (let prop in key) {
      clone[prop] = object[prop];
    }
  }else {
  clone[key] = object[key];
  }
}
console.log (clone);