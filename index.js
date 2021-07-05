function add(num1, num2) {
  return num1 + num2;
}

function subtract (minuend, subtrahend) {
  var difference = minuend - subtrahend;
  return difference;
}

function multiply(a,b) {
  return a * b;
}

function divide(dividend, divisor){
  var quotient = dividend / divisor;
  return quotient;
}

function inc(n) {
  n++; //or ++n or n += 1
  return n; // or I could delete the above statment and return n++
}

function dec(n){
  n -= 1; // or --n or n--
  return n;
}

function makeInt(newNum){
  return parseInt(newNum, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
}
