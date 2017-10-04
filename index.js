
add(2,3);
subtract(2,3);
multiply(2,3);
divide(2,3);
inc(2);
dec(2);
makeInt("3");
preserveDecimal(1.22);


function add(a, b){
  return a+b;
}
function subtract(a, b){
  return a-b;
}
function multiply(a, b){
  return a*b;
}
function divide(a, b){
  return a/b;
}
function inc(n){
  var x = n;
  x++;
  return x;
}
function dec(n){
  var x = n;
  x--;
  return x;
}
function makeInt(n){
  return parseInt(n,10);
}
function preserveDecimal(n){
  var n = parseFloat(n);

  return n;
}
