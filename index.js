var a = 10
var b = 5

function add(a,b) {
  return a+b;
}
function subtract(a,b) {
  return a-b;
}

function divide(a,b) {
  return a/b;
}
function multiply(a,b) {
  return a*b;
}
function inc(a){
  return a+1;
}
function dec(a){
  return a-1;
}
console.log(add(a,b))
console.log(subtract(a,b))
console.log(divide(a,b))
console.log(multiply(a,b))
console.log(inc(a))
console.log(dec(a));

function makeInt(a){
  return parseInt(a,10);
}
makeInt("10");
makeInt("9000");
makeInt("sldkjflksjf");

function preserveDecimal(a){
  return parseFloat(a);
}
preserveDecimal("2.222");

function makeIpreserveDecimalnt(a){
  return parseFloat(a);
}
makeInt("sldkjflksjf");
