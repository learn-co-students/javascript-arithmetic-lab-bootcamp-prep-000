function add (a, b) {
  var number = a + b;
  return number;
}

function subtract (a,b) {
  var number = a - b;
  return number;
}

function multiply (a,b) {
  var number = a * b;
  return number;
}

function divide (a,b) { 
  var number = a/b;
  return number;
}

function inc(n) {
  return ++n;
}

function dec(n) {
  return --n
  ;
}

function makeInt(n) { 
  if (n === isNaN) { return NaN}
  else {return parseInt(n,10);}
    
  }
  
  function preserveDecimal(n) {
    if (n === isNaN) { return NaN}
    else { return parseFloat(n);
  }
  }