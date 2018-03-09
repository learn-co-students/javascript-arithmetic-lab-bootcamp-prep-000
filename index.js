function add(a,b) {
  return (a+b)
}
function subtract(b,a) {
  return (b-a);
}
function multiply(a,b) {
  return (a*b);
}
function divide(a,b) {
  return (a/b);
}
function inc(n) {
  return n += 1;
}
function dec(n) {
  return n -+1;
}
function makeInt(n) {
  var parsed = parseInt(n,10);
  return parsed * 1;
}
function preserveDecimal(n) {
  return parseFloat(n) * 1;
}
