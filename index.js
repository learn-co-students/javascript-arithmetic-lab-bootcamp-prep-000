// Adds a and b and returns the result. 
function add(a, b){
  return (a + b)
}

// Subtracts a and b and returns the result.
function subtract(a, b){
  return (a - b)
}

// Multiplies a by b and returns the result.
function multiply(a, b){
  return (a * b)
}

// Divides a and b and returns the result.
function divide(a, b){
  return (a / b)
}

//Inc(n) increments n and returns the result.
function inc(a){
  return (a + 1)
}  

//Dec(n) increments n and returns the result.  
function dec(a){
  return (a - 1)
}

//Parses n as an integer and returns the parsed integer.
function makeInt(a){
  return (parseInt(a))
}  

//MakeInt(n) assumes base 10.
function makeInt(a){
  return (parseInt(a, 10))
}

/*PreserveDecimal(n) preserves n's decimals (it parses n as a floating pointnumber) and returns the parsed number */
function preserveDecimal(a){
  return (parseFloat(a))
}  
