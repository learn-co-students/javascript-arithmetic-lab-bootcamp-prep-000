//adds a and b 
function add(a,b) {
  return a + b; 
}

//subtracts a and b
function subtract(a,b) {
  return a -b;
}

//multiplies a and b 
function multiply(a,b) {
  return a*b;
}

//divides a and b 
function divide(a,b){
  return a/b;
}

//n is incremented
function inc(n) {
  return n+= 1;
}
//n is decremented 
function dec(n) {
  return n-= 1;
}

//takes string and makes it an integer
function makeInt(n) {
  return parseInt(n);
}

//makes integer assuming base 10
function makeInt(n) {
  return parseInt(n,10);
}

//preserve decimals
function preserveDecimal(n) {
  return parseFloat(n);
}
