var a, b, n;
  a = 2000;
  b = 10000;
  n = 2.222;

function add(a,b) {
  return a + b
}

function subtract(a,b){
  return a - b
}

function multiply(a,b) {
  return a * b
}

function divide(a,b){
  return a / b
}

function inc(n){
  return ++ n
}

function dec(n){
  return -- n
}

function makeInt(n){
  return parseInt(n, 10)
}

function assumebase10(){
  return parseInt(n)
}

function preserveDecimal(n){
  return parseFloat (n)
}

function saysNaN(){
  return parseInt("askdjfals")
}
