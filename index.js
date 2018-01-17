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
function makeInt(a, base) {
  var parsed = parseInt(a, 10);
  if (isNaN(parsed)) { return 0 }
  return parsed;
  }

function preserveDecimal(n) {
  // preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number
  var parsed = parseFloat(n);
  return parseFloat(n) 
  }

function preserveDecimal(n) {
  // returns NaN as appropriate
  var parsed = parseFloat(n);
  if (isNaN(parsed)) {return 0}
  return parseFloat(n) 
  }

function preserveDecimal() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  }