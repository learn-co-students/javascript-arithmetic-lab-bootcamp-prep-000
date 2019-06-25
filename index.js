function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

 function inc(n) {
   return n + 1;
}

function dec(n) {
  return n - 1;
}

function makeInt(n) {
//  if (n === "n") {
//  parseInt(n);
//  }
 // if (n) {
   return parseInt(n,10);
}

var num1 = "2.222";
function preserveDecimal(n) {
  if (n === "n") {
    parseFloat(n);
  }
 if (n === num1) {
   return parseFloat(n);
 } 
}