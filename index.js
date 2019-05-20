var a = Math.floor(Math.random()*1000);
var b = Math.floor(Math.random()*1000);

function add(a,b) {
  return a+b
}
console.log(add(a,b));

function subtract(a,b) {
  return a-b
}
console.log(subtract(a,b));

function multiply(a,b) {
  return a*b
}
console.log(multiply(a,b));

function divide(a,b) {
  return a/b
}
console.log(divide(a,b));

function inc(a) {
  return ++a
}
console.log(inc(a));

function dec(a) {
  return --a
}
console.log(dec(a));

function makeInt(a) {
  return parseInt(a)
}
console.log(makeInt(a));

function makeInt(a, radix) {
  return parseInt(a,10)
}
console.log(makeInt(a));

function preserveDecimal(a) {
  return parseFloat(a)
}
console.log(preserveDecimal(a));
