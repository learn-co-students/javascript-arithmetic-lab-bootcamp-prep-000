function add(a,b) {

  return a + b;
}

function subtract(a,b) {
  
  return a - b;
}

function multiply(a,b) {
  
  return a * b;
}

function divide(a,b) {
  
  return a / b;
}

function inc(n) {
  let number = n++ ;
  return number + 1;
}

function dec(n) {
  let number = n--;
  return number - 1;
}

function makeInt(n) {
 let parses = parseInt(n, 10);
 if(isNaN(parses)) {return NaN}
  return parses * 1;
  }

function preserveDecimal(n) {
  let parses = parseFloat('2.222');
  return parseFloat(n);
  }   

/*
 let parses = parseInt(n);
  if(isNaN(parses)) {return 0}



*/
