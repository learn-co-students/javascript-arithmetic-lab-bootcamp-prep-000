function add(leftSide, rightSide) {
  return leftSide += rightSide;
}

function subtract(leftSide, rightSide) {
  return leftSide -= rightSide;
}

function multiply(leftSide, rightSide) {
  return leftSide *= rightSide;
}

function divide(leftSide, rightSide) {
  return leftSide /= rightSide;
}

function inc(n) {
  return n += 1;
}

function dec(n) {
  return n -= 1;
}

function modulate(leftSide, rightSide) {
  return leftSide % rightSide;
}

function makeInt(num) {
  return parseInt(num, 10);
}

function preserveDecimal(num) {
  return parseFloat(num);
}