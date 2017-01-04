var a;
var b;

beforeEach(function()) {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
}

function add(a,b) {
   return a + b
}

function subtract(a,b) {
   return a - b
}

function multiply(a,b) {
   return a * b
}

function divide(a,b) {
   return a / b
}

function inc(n) {
   return += n
}

function dec(n) {
   return -= n
}


function makeInt(n){
return parseInt(n,10);

}
makeInt('0x2328'.toEqual(0));


function preserveDecimal(n){
  return parseFloat(n);

}
preserveDecimal('2.222');
