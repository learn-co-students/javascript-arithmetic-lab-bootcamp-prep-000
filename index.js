function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(n) {
  return n + 1
}

function dec(n){
 return n - 1
}

function makeInt(n) {
  return parseInt(n, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}

add(4, 6);
subtract(12, 8);
multiply(2, 2);
divide(10, 5);
inc(286);
dec(983);
makeInt('7');
makeInt('hello');
preserveDecimal('5.55');
preserveDecimal('hello');
