let div = document.querySelectorAll (".crap");

for (let i = 0; i < div.length; i++) {
  console.log (div[i]);
  div[i].style.background = 'red';
  div[i].style.margin = '10px';
  div[i].onclick = twoo;
}

function twoo ()  {
  console.log ("Work");
}

let b = document.getElementsByClassName ("crap");
console.log (b);
for (let i = 0; i < b.div; i++) {
  div [i].style.border = "2px solid grey";
}