var number;

function add(a, b) {
  number = a + b; 
  return number;
}
add();

function subtract(a, b) {
  number = a - b; 
  return number;
}
add();

function multiply(a, b) {
 number = a * b; 
  return number;
}
add();

function divide(a, b) {
  number = a / b; 
  return number;
}
add();

function inc(n) {
  number = n + 1; 
  return number;
}
inc(175);

function dec(n) {
  number = n - 1; 
  return number;
}
inc(556);

function makeInt(n) {
  number = parseInt(n, 10); 
  return number;
} 

function makeInt(n) {
  number = parseFloat(n, 10); 
  return number;
} 

function preserveDecimal(n) {
  return parseFloat(n, 10);
}
