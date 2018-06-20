function add(a, b){
  a += b ;
  return a;
}
function subtract(a, b){
  a -= b;
  return a;
}
function multiply(a, b){
  a *= b;
  return a;
}
function divide(a, b){
  a /= b;
  return a;
}
function inc(n){
  ++n;
  return n;
}
function dec(n){
  --n;
  return n;
}
function makeInt(n){
  n = parseInt(n, 10);
  return n;
}
function preserveDecimal (n){
  n = parseFloat(n);
  return n;
}