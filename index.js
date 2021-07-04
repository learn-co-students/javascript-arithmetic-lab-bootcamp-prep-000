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

var number = 1;

function inc(n) {
  return n += number;
}

function dec(n) {
  return n -= number;
}

function makeInt(n) {
	return parseInt(n, 10);
}

function preserveDecimal(n) {
	return parseFloat(n);
}
