function add(a, b) {
  return a + b;
}

add(2, 3); // 5

function subtract(a, b) {
  return a - b;
}

subtract(2, 3); // -1

function multiply(a, b) {
  return a * b;
}

multiply(2, 3); // 6

function divide(a, b) {
  return a / b;
}

divide(2, 3); // 0.66~

function inc(n) {
  return n += 1;
}

inc(5); // 6

function dec(n) {
  return n -= 1;
}

dec(5); // 4

function makeInt(n) {
  return parseInt(n, 10);
}

makeInt(2); // 2
makeInt(2.22); // 2
makeInt("sup"); // NaN

function preserveDecimal(n) {
  return parseFloat(n);
}

preserveDecimal(1.222); 1.222
preserveDecimal("wsup"); // NaN
