var a = Math.floor(Math.random() * 1000);
var b = Math.floor(Math.random() * 1000); 

function add(a, b) {
  return a + b; 
}

function subtract(a, b) {
  return a - b; 
}

function multiply(a,b) {
  return a * b; 
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
  var a = n;
  return a += 1;
}


function dec(n) {
  var a = n
  return a -= 1;
}

function makeInt(n) {
  return parseInt(n, 10);
}

makeInt('0x2328');
makeInt('sldkjflksjf');


function preserveDecimal(n) {
  return parseFloat(n);
}

preserveDecimal(2.222);
preserveDecimal('sldkjflksjf');
