function add(a, b){
  var addition = a += b;
  return addition;
}
function subtract(a, b){
  var sub = a -= b;
  return sub;
}
function multiply(a, b){
  var mult = a *= b;
  return mult;
}
function divide(a, b){
  var div = a /= b;
  return div;
}
function inc(n){
  n++;
  return n;
}
function dec(n){
  n--;
  return n;
}
function makeInt(n){
  var integer =parseInt(n, 10);
  return integer;
}
function preserveDecimal(n){
  var decimal =parseFloat(n);
  return decimal;
}
