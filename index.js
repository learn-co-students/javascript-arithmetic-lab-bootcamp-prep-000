function add(a, b){
  var sum = a + b;
  return sum;
}
function subtract(a, b){
  var sum = a - b;
  return sum; 
}
function multiply(a, b){
  var sum = a * b;
  return sum;
}
function divide(a, b){
  var sum = a / b;
  return sum;
}
function inc(a){
  var sum = a;
  sum++;
  return sum;
}

function dec(a){
  var sum = a;
  sum--;
  return sum;
}
function makeInt(n){
  var sum = parseInt(n, 10);
  return sum;
}
function preserveDecimal(n){
  var sum = parseFloat(n);
  return sum;
}
//makeInt(n) 9000 but needs 0 
//preserveDecimal(n) sum is not defined
