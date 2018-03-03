var x = 6,y=6
function multiply(x, y) {
  var product = x * y;
  return product;
}
function add(x, y) {
  var product = x+y;
  return product;
}
function subtract(x, y) {
  var product = x-y;
  return product;
}
function divide(x, y) {
  var product = x/y;
  return product;
}
function inc(x) {
  var product = x+1;
  return product;
}
function dec(x) {
  var product = x-1;
  return product;
}

function makeInt(n) {
  var parsed = parseInt(n);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}
var n='2.222'
function preserveDecimal(n) {
  var parsed = parseFloat(n)
  if (isNaN(parsed('sldkjflksjf'))) { return true }
  return parsed
}

function makeInt(n){
  return parseInt(n, 10);
}

function preserveDecimal(n){
 return parseFloat(n);
}