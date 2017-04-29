function add( a, b ){
  return a + b;
}

function subtract( a, b ){
  return a - b;
}

function multiply( a, b ){
  return a * b;
}

function divide( a, b ){
  return a / b;
}

function inc(n){
  var number = ++n;
  return number;
}

function dec(n){
  var numberdec = --n;
  return numberdec;
}

function makeInt( n ){
  var intNum = parseInt(n, 10);
  return intNum;
}

function preserveDecimal( n ){
  var decNum = parseFloat(n);
  return decNum;
}
