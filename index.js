function add(a, b){
  var sum = (a + b);
  return sum;
}

function subtract(a,b){
  var subtracted = (a - b);
  return subtracted;
}

function multiply(a,b){
  var product = (a * b);
  return product;
}

function divide(a,b){
  var divided = (a / b);
  return divided;
}

function inc(a){
  var n = parseInt(a + 1);
  return n; 
}

function dec(a){
  var n = parseInt(a - 1);
  return n;
}

function makeInt(a){
  var n = parseInt(a);
  return n;
}

function makeInt(a){
  var n = parseInt(a, 10);
  return n;
}

function preserveDecimal(a){
  var n = parseFloat(a, 10);
  return n;
}
