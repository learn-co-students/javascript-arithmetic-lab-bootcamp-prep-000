function add(a, b) {
  return a + b;
};
function subtract(a, b) {
  return a - b;
};
function multiply(a, b) {
  return a * b;
};  function divide(a, b) {
  return a / b;
};
function inc(n) {
  return ++n;
};
function dec(n) {
  return --n;

}
function makeInt(n) {
  if (isNaN(n)){
    return
  }
  else {
    return parseInt(parseFloat(n));
  }
};
function preserveDecimal(n){
  return parseFloat(n);
};
