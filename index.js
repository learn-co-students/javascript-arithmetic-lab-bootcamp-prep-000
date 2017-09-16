const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const inc = n => n + 1;
const dec = n => n - 1;

function makeInt (n) {
  if (parseInt(n, 10) === 0) {
    return 0;
  } else if (parseInt(n) === NaN) {
    return true;
  } else {
    return parseInt(n);
  }
}

function preserveDecimal(n) {
  if (parseFloat(n, 10) === NaN) {
    return true;
  } else {
    return parseFloat(n);
  }
}
