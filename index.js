function add(a, b){
  var number = a + b
  return number;
}


function subtract(a, b){
  var number = a - b
  return number;
}

function multiply(a, b){
  var number = a * b
  return number;
}

function divide(a, b){
  var number = a / b
  return number;
}


var i = 0;
function inc(n){
  n++;
  return n
}

i = inc(i);

var ii = 0;
function dec(n){
  n--
  return n
}
ii = dec(ii)

function makeInt(n){
  return parseInt(n)
}

function makeInt(n){
  return parseInt(n, 10)
}

function preserveDecimal(n){
  return parseFloat(n);
}

