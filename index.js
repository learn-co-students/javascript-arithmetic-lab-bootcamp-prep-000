function add(a, b) {
  return(a + b);
}

console.log("add " + add(1, 2));

function subtract(a, b) {
  return(a - b);
}

console.log("subtract " + subtract(4, 3));

function multiply(a, b) {
  return(a * b);
}

console.log("multiply " + multiply(2, 3));

function divide(a, b) {
  return(a/b);
}

console.log("divide " + divide(20,5));

function inc(a) {
  return(a+1);
}

console.log("increment " + inc(23));
 
function dec(a) {
  return(a-1);
}
console.log("decrement " + dec(150));

function makeInt(a) {
  return(parseInt(a, 10));
}

console.log("integer " + makeInt(20));

function preserveDecimal(b) {
  return(parseFloat(b));
}

console.log("preserve decimal " + preserveDecimal(7.889));

