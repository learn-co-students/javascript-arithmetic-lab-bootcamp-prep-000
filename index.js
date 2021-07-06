function inc(a) {
  return a + 1;
}
inc('a + 1')

function add(a, b) {
  return a + b;
}
add('a + b')

function subtract(a, b) {
  return a - b;
}
subtract('a - b')

function multiply(a, b) {
  return a * b;
}
multiply('a * b')

function divide (a, b) {
  return a / b
}
divide('a / b')

function dec(a) {
  return a - 1;
}
dec('a - 1')

function makeInt(a) {
  return parseInt(a, 10);
}
makeInt('parseInt(a, 10)')

function makeInt(a) {
  return parseInt(a, 10);
}
makeInt(parseInt('a', 10))

function preserveDecimal(a) {
  return parseFloat('a');
}
preserveDecimal(parseFloat('a'))

function preserveDecimal(a) {
  return parseFloat(a)
}
preserveDecimal(parseFloat('a'))
