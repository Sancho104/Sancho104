function truncate(st, maxlength) {
  let len = st.length;
  if (len <= maxlength) {
    return st;
  } else {
    return st.slice(0, maxlength) + '...';
  }
}
console.log(truncate(str, 20));
console.log('length str'  + ' = ' + str.length);