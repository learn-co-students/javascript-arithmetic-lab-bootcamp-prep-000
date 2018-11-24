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
  return parseInt('n',10);
  
}

function makeInt(){
  var n = parseInt('sldkjflksjf',10);
  if(isNaN(n)){
    return 'NaN as appropriate';
 }
}

function preserveDecimal(n){
  n = 2.222;
 return parseFloat('n');
 }

function preserveDecimal(){
  var n = parseFloat('sldkjflksjf');
  if(isNaN(n)){
    return 'NaN as appropriate';
  }
}
