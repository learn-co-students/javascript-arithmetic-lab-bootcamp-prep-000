function add(a, b) {
  return(a + b);
}
add();

function subtract(a, b) {
  return(a - b);
}
subtract();

function multiply(a, b) {
  return(a * b);
}
multiply();

function divide(a, b) {
  return(a / b);
}
divide();

function inc(n) {
  return(n + 1);
}
inc();

function dec(n) {
  return(n - 1);
}
dec();

/* parses n as an integer and returns the parsed integer */
function makeInt(n) {
  parseInt('n');
  return n;
}
makeInt();

/* CAN’T GET THIS ONE RIGHT */
/* assumes base 10 */
function makeInt(n) {
  parseInt(n);
  return n;
}
makeInt();

/* returns NaN as appropriate */
function makeInt(n) {
  parseInt('sldkjflksjf', 10);
  return n;
}
makeInt();

/* preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number */
function preserveDecimal(n) {
  parseFloat('2.222');
  return n;
}
preserveDecimal();

/* returns NaN as appropriate */
function preserveDecimal(n) {
  parseFloat('sldkjflksjf', 10);
  return n;
}
preserveDecimal();
