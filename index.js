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

function makeInt(){
    var n = parseInt('a',10);
    return n;
}

function makeInt(){ 
  var n = parseInt('0x2328',10);
  return n*=0;
}

function makeInt(){
  var n = parseInt('sldkjflksjf',10);
  if(isNaN(n)){
    return 'NaN as appropriate';
 }
}

function preserveDecimal(){
  return parseFloat('2.222');
  
}

function preserveDecimal(){
  var n = parseFloat('sldkjflksjf');
  if(isNaN(n)){
    return 'NaN as appropriate';
  }
}
