var a = 10
var b = 5


function add(a, b) {
  return (a + b)
}

function subtract(a, b) {
  return (a - b)
}

function multiply(a, b) {
  return (a * b)
}

function divide(a, b) {
  return (a / b)
}

function inc(n) {
  return (n += 1)
}

function dec(n) {
  return (n -= 1)
}

function makeInt(n) {
  return parseInt(n, 10);
}

function makeZero() {
 return parseInt('0x2328', 10);
}

function makeNan() {
  return parseInt('sldkjflksjf', 10);
}

function makeDecimal() {
  return parseFloat('2.222');
}

function preserveDecimal(n) {
 return parseFloat(n);
}

