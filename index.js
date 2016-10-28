var a = 10
var b = 2.0
a = Math.floor(Math.random()* 1000)
b = Math.floor(Math.random()* 1000)

function add(a, b){
  return a += b;
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

function inc(a) {
  return ++a;a
}

function dec(a) {
  return --a;
}

function makeInt(a) {
  return parseInt(a.toString(), 10);
}

function preserveDecimal(b) {
  return parseFloat(b.toString(), 10);
}
