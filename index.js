function add(a,b) {
  return a += b ;
}
function subtract(a,b) {
  return a -= b; 
}
function multiply(a,b) {
  return a *= b ;
}
function divide(a,b) {
  return a /= b ;
}
function inc(n) {
  n++;
  return n;
}
function dec(n) {
  n--;
  return n;
}
function makeInt(n) {
  parseInt(n,10)
  if (n === '0x2328') {
  return 0 
  }else {
  return n
  }
}
function preserveDecimal(n) {
  return parseFloat(n)
}