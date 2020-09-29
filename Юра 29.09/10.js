function checkSpam(st) {
  let sta = st.toLowerCase();
  if (sta.indexOf('viarga') != -1 || sta.indexOf('xxx') != -1 ) {
    return true;
  }else {
    return false;
  }
}
console.log(checkSpam(str));