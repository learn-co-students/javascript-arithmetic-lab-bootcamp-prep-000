var a = 10;
var b = 15;
function add( a, b ){
  return a + b;
}

function subtract(a, b){
  return a - b;
}
function multiply( a, b){
  return a* b;
}
function divide(a, b){
  return a/b;
}
function inc(a){
  return a+1;
}
function dec(a){

  return a -1;
}
function makeInt(num){ parseInt()
  return parseInt(num, 10);
}

 function preserveDecimal(num){
    var n = parseFloat(num);
    if (isNaN(n)) {
        return NaN;
    }
    else {
        return parseFloat(num);
    }
}
  
