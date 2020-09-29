let fuk = 'you-hate-cooking';

function camelize(st) {
  let ar = st.split('-');
  let res = ar.map ((word, index) => {
    if (index == 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  })
  let re = res.join('');
  return re;
}
console.log( camelize (fuk));