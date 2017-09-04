function add(a,b){
  return a + b;
}
add(1,2);

function subtract(b,a){
  return b - a;
}
subtract(2,1);

function multiply(a,b){
  return a * b;
}
multiply(1,2);

function divide(a,b){
  return a / b;
}
divide(1,2);

function inc(n){
  n++;
  return n;
}
inc(0);

function dec(n){
  n--;
  return n;
}
dec(0);

function makeInt(n){
  return parseInt(n, 10);
}
makeInt("2");

function preserveDecimal(n){
  return parseFloat(n);
}
preserveDecimal("20.20");
