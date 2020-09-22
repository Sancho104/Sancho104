let i = 2100;
if (i % 100 == 0 && i % 400 != 0) {
  console.log ('Обычный');
}else if (i % 4 == 0 ) {
  console.log ('Высокосный');
}else {
  console.log ('Обычный');
}