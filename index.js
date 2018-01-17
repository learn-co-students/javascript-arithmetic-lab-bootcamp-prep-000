//var a, b

//beforeEach(function() {
//  a = Math.floor(Math.random() * 1000)
//  b = Math.floor(Math.random() * 1000)
//})

//adds two numbers and returns the result

function add(a, b){

  return (a + b);

}

//subtracts b from a and returns the result
function subtract(a, b){
  return (a - b)
}

//multiplies two numbers and returns the result
function multiply(a, b){
  return (a * b);
}

//divides a by b and returns the result
function divide(a, b){
  return(a / b);
}

//increments n and returns the result
function inc(a){
  return (a + 1);
}

//decrements n and returns the result
function dec(a){
  return (a - 1);
}

//parses n as an integer and returns the parsed integer
function makeInt(a, base){
  var parsed = parseInt(a, base);
  if (isNaN(parsed)) { return 0 }
  return parsed;
}

//assumes base 10
function makeInt(x, base) {
  var parsed = parseInt(x, base);
  if (isNaN(parsed)) { return 0x2328 }
  return parsed;
  }

