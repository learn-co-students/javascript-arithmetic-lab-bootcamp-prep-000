function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function inc(n) {
  n++;
  return n;    //separated calculation from return
}
function dec(n) {
  return --n;  //included the calc as part of the return
}
function makeInt(n) {
  parseInt(n);
  return n;
}
function makeInt(n) {
  return parseInt(n, 10);
}
function preserveDecimal(n) {
  return parseFloat(n);
}
