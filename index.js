let a = Math.floor(Math.random() * 1000)
let b = Math.floor(Math.random() * 1000)
function add(a, b){
return a+b;
}
add(a, b);

let c = Math.floor(Math.random() * 1000)
let d = Math.floor(Math.random() * 1000)
function subtract(c, d) {
  return c-d;
}
subtract(c, d);

let e = Math.floor(Math.random() * 1000)
let f = Math.floor(Math.random() * 1000)
function multiply(e, f) {
  return e*f;
}
multiply(e, f);

let g = Math.floor(Math.random() * 1000)
let h = Math.floor(Math.random() * 1000)
function divide(g, h) {
  return g/h;
}
divide(g, h);

var number;
function inc(a) {
  number = a + 1;
  return number;
}

function dec(a) {
  number = a - 1;
  return number;
}

function makeInt(n) {
  number = parseInt (n , 10);
  return number;
  
}

function preserveDecimal(n) {
  number = parseFloat('2.222');
  return number;
}

function preserveDecimal(n) {
  number = parseFloat(n, 10);
  return number;
}




