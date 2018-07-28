function add(a, b){
  return a + b;
}
function subtract(a, b){
  return a - b;
}
function multiply(a, b){
  return a * b;
}
function divide(a, b){
  return a / b;
}
function inc(n){
  return n+=1;
}
function dec(n){
  return n-=1;
}
function makeInt(n){
  return parseInt(n, 10);
}
function preserveDecimal(n){
  return parseFloat(n);
}

add(1,2);
subtract(4,2);
multiply(5,3);
divide(4,2);
inc(2);
dec(3);
makeInt('4.123');
preserveDecimal('4.123');