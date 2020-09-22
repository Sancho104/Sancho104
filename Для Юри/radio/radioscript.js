document.querySelector (".ppp").onclick = () => {
  let rr = document.querySelectorAll ("input[type='radio']");
  console.log (rr);
  for (let i = 0; i < rr.length; i++) {
    if (rr[i].checked) {
      console.log (rr[i].value);
    }
  }
}