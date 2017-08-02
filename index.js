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

add(1, 80)
subtract(60, 40);
multiply(2, 3.4);
divide(5, 2.5);

function inc(n) {
  return n += 1;
}

function dec(n) {
  return n -= 1;
}

inc(1);
dec(1);

function makeInt(n) {
  return parseInt(n, 10);
}

makeInt("28");
makeInt('0x2328');
makeInt('sldkjflksjf');

function preserveDecimal(n) {
  return parseFloat(n);
}

preserveDecimal('2.222');
preserveDecimal('sldkjflksjf');
