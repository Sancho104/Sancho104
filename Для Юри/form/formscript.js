let name = document.querySelector("#firstName");
let family = document.querySelector("#secondName");
let city = document.querySelector("#city");
let play = document.querySelector("#play");
let sleep = document.querySelector("#sleep");
let eat = document.querySelector("#eat");
let password = document.querySelector("#pass");
let button = document.querySelector("#sub");
 let form = document.querySelector("form");

button.onclick = (event) => {
  event.preventDefault ();
  console.log (name.value);
  console.log (family.value);
  console.log (city.value);
  if (play.checked) {
    console.log (play.value);
  }
  if (sleep.checked) {
    console.log (sleep.value);
  }
  if (eat.checked) {
    console.log (eat.value);
  }
  console.log (form.elements.pass.value);
  name.value = "";
  family.value = "";
  city.value = "";
  play.value = "";
  sleep.value = "";
  eat.value = "";
  password.value = "";
}

//виводить дані з форми