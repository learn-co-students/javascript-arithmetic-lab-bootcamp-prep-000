




function add(a,b) {
  return a + b;
}
add(2,2);

function subtract(a,b) {
  return a - b;
}
subtract(3,1);

function multiply(a,b) {
  return a * b;
}
multiply(2,2);

function divide(a,b) {
  return a / b;
}
divide(4,2);

function inc(a) {
  return a + 1;
}
inc(2);

function dec(a) {
  return a - 1;
}
dec(2);

function makeInt(a) {
  return parseInt(a.toString());
}
makeInt('3.75');

function makeInt(a) {
  return parseInt(a,10);
}
makeInt('0x2328');

function preserveDecimal(a) {
  return parseFloat(a);
}
preserveDecimal('2.222');
