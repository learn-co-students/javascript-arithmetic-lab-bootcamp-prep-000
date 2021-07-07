function add(a,b) {
  return a+b;
}
function subtract (a,b){
  return a- b;
}
function multiply (a,b) {
  return a*b;
}
function divide (a,b) {
  
  return a/b;
}
var n = 10
function inc(n){
  return n += 1
}

var n = 10
function dec(n){
  return n -= 1;
}

var n = "10"
function makeInt(n){
  return parseInt(n,10); 
}

var n = "80.123999"
function preserveDecimal(n){
  return parseFloat(n)
}