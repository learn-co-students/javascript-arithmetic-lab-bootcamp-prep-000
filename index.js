var a = 5;
var b = 10;

function add(a, b) {
  return (a + b);
}

function subtract(a, b) {
  return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  return (a / b);
}

function inc(n) {
  return (n += 1);
}

inc(1);

function dec(n) {
  return (n -= 1);
}

dec(2);

function makeInt(n) {
  return (parseInt(n, 10));
}

makeInt('20');

function preserveDecimal(n) {
  return (parseFloat(n));
}

preserveDecimal('10.333334');