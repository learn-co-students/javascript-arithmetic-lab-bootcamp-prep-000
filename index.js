function add(a,b) {
  var numberA = makeInt(a);
  var numberB = makeInt(b);

  return numberA+numberB;
}

function subtract(a,b) {
  var numberA = makeInt(a);
  var numberB = makeInt(b);

  return numberA-numberB;
}

function multiply(a,b) {
  var numberA = makeInt(a);
  var numberB = makeInt(b);

  return numberA*numberB;
}

function divide(a,b) {
  var numberA = makeInt(a);
  var numberB = makeInt(b);

  return numberA/numberB;
}

function inc(n){
  var numberN = makeInt(n);
  numberN++;
  return numberN;
}

function dec(n){
  var numberN = makeInt(n);
  numberN--;
  return numberN;
}

function makeInt(n) {
  var numberN =  parseInt(n,10);
  return numberN;
}

function preserveDecimal(n) {
  var decimalN = parseFloat(n);
  return decimalN;
}
