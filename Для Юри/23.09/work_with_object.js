let menu = {
  width: 200,
  height: 300,
  title: "My menu",
}

function multiplyNumeric(object) {
  for (let key in object) {
    if (typeof object[key] !== 'number') {
      continue;
    }else {
      object[key] *= 2;
    }
  }
  return object;
}
// multiplyNumeric (menu);