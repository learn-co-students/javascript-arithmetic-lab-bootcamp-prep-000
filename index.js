var number;

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
  number = a + 1;
  return number;
}

function dec(a){ 
  number = a - 1;
  return number;
}

function makeInt(a) {
   number = parseInt(a, 10);
  return number;
}

function preserveDecimal(a){
  number = parseFloat(a,10);
  return number;
}

