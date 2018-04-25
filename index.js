function add(x, y) {
  return x + y;
}
add(1, 81);

function subtract(x, y) {
  return x - y;
}
subtract(60, 40);

function multiply(x, y) {
  return x * y;
}
multiply(2, 3.4);

function divide(x, y) {
  return x / y;
}
divide(5.0, 2.5);

function inc(n) {
  return n + 1;
}
inc(5);

function dec(n) {
  return n - 1;
}
dec(5);

function makeInt(n) {
  return parseInt(n, 10);
}
makeInt('5.5');
makeInt('nada');

function preserveDecimal(n) {
  return parseFloat(n);
}
preserveDecimal('5.5');
preserveDecimal('nada');
