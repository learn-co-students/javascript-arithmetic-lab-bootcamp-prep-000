function add(a,b){                //add a + b
  return a + b;
}

function subtract(a,b){                //subtract b from a
  return a - b;
}

function multiply(a,b){                //multiply a by b
  return a * b;
}

function divide(a,b){                //divide a by b
  return a / b;
}

function inc(n){                      //increase n by 1
  return n += 1;
}

function dec(n){                      //decrease n by 1
  return n -= 1;
}

function makeInt(n){                  //parse n as an integer in base 10 and return it
  return parseInt(n, 10);
}

function preserveDecimal(n){          //parse n as a floating point number and then return it
  return parseFloat(n);          
}
