var number;
function add(a, b){
  number = a + b;
  return number; 
}
function subtract(a, b){
  number = a - b;
  return number;
}
function multiply(a, b){
  number = a * b;
  return number
}
function divide(a, b){
  number = a / b;
  return number
}
function inc(n){
  number = ++n
  return number
}
function dec(n){
  number = --n
  return number
}
function makeInt(n){
 number = parseInt(n, 10)
 return number
}
function preserveDecimal(n){
  number = parseFloat(n)
  return number
}