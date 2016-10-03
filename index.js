var a=5;
var b=6;

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

var n=1;
function inc(n){
  return ++n;
}

var n=1;
function dec(n){
  return --n;
}
var n="1";
function makeInt(n)
{
  return  parseInt(n,10);
}

var n="1.00";
function preserveDecimal(n)
{
  return  parseFloat(n,10);
}
