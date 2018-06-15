var a = 2, b = 5;

function add(a,b) {
 return a += b;
}
 
function subtract(a,b) {
  return a -= b;
}

function multiply(a,b) {
  return a *= b;
}
function divide(a,b) {
  return a /= b;
}

function inc(a) {
  return a + 1;
}

function dec(a) {
  return a - 1;
}

function makeInt(a){
  return parseInt(a,10);
}

function preserveDecimal(a){
  return parseFloat(a);
}

console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));
console.log(inc(a));
console.log(dec(a));
console.log(makeInt(a));
console.log(preserveDecimal(a));




