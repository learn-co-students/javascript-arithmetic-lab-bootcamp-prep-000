function add(a, b) {
  return a + b;
}
add(1, 80)

function subtract(a, b) {
  return a - b;
}
subtract(60, 40)

function multiply(a, b) {
  return a * b;
}
multiply(2, 3.4)

function divide(a, b) {
  return a / b;
}
divide(5, 2.5)

function inc(n) {
  return n += 1;
}
inc(5)

function dec(n) {
  return n -= 1;
}
dec(5)

function makeInt(n) {
  return parseInt(n, 10);
}
makeInt('5.4')

function preserveDecimal(n) {
  return parseFloat(n, 10);
}
preserveDecimal('5.433')
