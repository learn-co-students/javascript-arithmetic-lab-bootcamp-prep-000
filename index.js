var a,b;
function beforeEach(){
  a = Math.floor(Math.random()*1000);
  b = Math.floor(Math.random()*1000);
}

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

function inc(a){
  return a+=1;
}

function dec(a){
  return a-=1;
}

function makeInt(n){ 
  return parseInt(n,10);
}

function preserveDecimal(n){
   return parseFloat(n);
}
