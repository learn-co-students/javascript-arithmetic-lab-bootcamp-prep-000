function subtract(a, b){
  return a -= b;
}
subtract(23,12);

function add(a, b){
  return a += b;
}
add(45, 32);

function multiply(a, b){
  return a *= b;
}
multiply(67, 82);

function divide(a, b){
  return a /= b;
}
divide(50, 54);

function inc(n){
  return n += 1;
}
inc(9);

function dec(n){
  return n -= 1;
}
dec(4);

function makeInt(n){
  return parseInt(n, 10);
}
makeInt('4');

function preserveDecimal(n){
  return parseFloat(n);
  
}
preserveDecimal('3.1415');
preserveDecimal('Mia F');