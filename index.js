var number;
function add (a, b){
  number = a + b;
  return number;
}
function subtract (a, b){
  number = a - b;
  return number;
}
function multiply (a, b){
  number = a * b;
  return number;
}
function divide (a, b){
  number = a / b;
  return number;
}
function increment(n) {
  number = n + 1;
  return number;
}
function decrement(n) {
  number = n - 1;
  return number;
}
function makeInt(a) {
  number = parseInt (a, 10);
  return number;
}
function preserveDecimal(a){
  number = parseFloat(a, 10);
  return number;
}