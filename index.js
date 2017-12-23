a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a,b){
  return a + b;
}

function subtract(a,b) {
  
  return a-b;
}
function multiply(a,b) {
  return a*b;
}
function divide(a,b){
  return (a)/(b);
}
function inc(n) {
  return n+1;
}
function dec(n){
  return n-1;
}
function makeInt(a){
  if (isNaN(a)){
    var message = "Not an Integer";
  }
const int = parseInt(a,10);
return int;
}
function preserveDecimal(a){
 var num = parseFloat(a);
  return num;
}