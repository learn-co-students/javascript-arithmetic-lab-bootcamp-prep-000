var a, b 
  a = Math.floor(Math.random() * 1000);
  b = Math.floor(Math.random() * 1000);
  
  
function add(a,b) {
  return a + b;

}
function subtract(a,b) {
  return a - b;
}
function multiply(a,b) {
  return a * b;
}
function divide(a,b) {
  return a / b;
}

function inc(n) {
  n ++;
  return n;
}
function dec(n) {
  n --;
  return n;
}

function makeInt(n, base) {
var parsed = parseInt(n, 10);
if (isNaN(parsed)) {return NaN}
return parsed;
}

function preserveDecimal(n) {
var parse = parseFloat(n);
if (isNaN(parse)) {return NaN}
return parse;
}