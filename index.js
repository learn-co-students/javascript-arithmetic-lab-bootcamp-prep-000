function add(a, b) {
  return a + b;
}

add(80, 1);

function subtract(a, b) {
  return a - b;
}

subtract(80, 1);

function multiply(a, b) {
  return a * b;
}

multiply(80, 1);

function divide(a, b) {
  return a / b;
}

divide(80, 1);

function inc(n) {
  n++;
  return n++;
}

inc(5)

function dec(n) {
  n--;
  return n--;
}

dec(5)

function makeInt(n) {
  return parseInt(n, 10);
}

makeInt('2.222');

function preserveDecimal(n) {
  return parseFloat(n);
}

preserveDecimal('2.222');
