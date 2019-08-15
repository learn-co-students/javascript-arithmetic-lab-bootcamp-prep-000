function add(x, y) {
    return x+y;
}
console.log(add(2, 3)); 


function subtract(x, y) {
  return x-y;
}
console.log(subtract(10, 5))


function multiply(x, y) {
  return x*y;
}
console.log(multiply(3, 5))


function divide(x,y) {
  return x/y;
}
console.log(divide(10, 2))



var n = 10;
function inc(n){
  n++;
  return n;
}


var n = 10;
function dec(n){
  n--;
  return n;
}


function makeInt(a) {
    return a;
}
console.log(makeInt(a + 1)); 


function makeInt(a) {
    return a;
}
console.log(makeInt(a - 1)); 


function makeInt(n){
  return parseInt(n, 10);
}

function preserveDecimal(n){
  return parseFloat(n);
}