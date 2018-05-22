var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}



function inc(n){
  return n +=1;
}
inc(n);

function dec(n){
  return n -=1;
}
dec(n);

function makeInt(n){
return parseInt (n, 10);
}
makeInt('0x2328');

function preserveDecimal(n){
return parseFloat (n);
}
preserveDecimal('2.222');


   