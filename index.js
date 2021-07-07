var a;
var b;
var n;

function add(a,b) {
  return a + b;
}
add(2,5);

function subtract(a,b) {
  return a - b;
}
subtract(5,4);

function multiply(a,b) {
  return a * b;
}
multiple(3,2);

function divide(a,b) {
  return a / b;
}
divide(10,5);

function inc(n) {
  n++;
  return n;
}
inc(4);

function dec(n) {
  n--;
  return n;
}
dec(6);

function makeInt(n) {
  return parseInt(n,10);
}
makeInt(7.5);

function preserveDecimal(n) {
  return parseFloat(n);
}
perserveDecimal(8.9999);
