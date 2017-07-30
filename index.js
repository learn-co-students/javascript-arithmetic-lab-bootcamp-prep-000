function add(a, b){
  var sum = parseFloat(a) + parseFloat(b);
  return sum;
}
function subtract(a, b){
  var difference = parseFloat(a) - parseFloat(b);
  return difference;
}
function multiply(a, b){
  var product = parseFloat(a)*parseFloat(b);
  return product;
}
function divide(a, b){
  var quotient = parseFloat(a)/parseFloat(b);
  return quotient;
}
function inc(n){
  return ++n;
}
function dec(n){
  return --n;
}
function makeInt(n){
  return parseInt(n);
}
function preserveDecimal(n){
  return parseFloat(n);
}
