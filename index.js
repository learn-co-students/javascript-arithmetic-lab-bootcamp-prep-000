//var a, b

//beforeEach(function() {
//  a = Math.floor(Math.random() * 1000)
//  b = Math.floor(Math.random() * 1000)
//})

//adds two numbers and returns the result

function add(a, b){

  return (a + b)

}

//subtracts b from a and returns the result
function subtract(a, b){
  return (a - b)
}

//multiplies two numbers and returns the result
function multiply(a, b){
  return (a * b)
}

//divides a by b and returns the result
function divide(a, b){
  return(a / b)
}

//increments n and returns the result
function inc(a){
  return (a + 1)
}

//decrements n and returns the result
function dec(a){
  return (a - 1)
}

//parses n as an integer and returns the parsed integer
function makeInt(a.toString()){
  return (a)
  }

//assumes base 10
function makeInt('0x2328'){
  return (0)
  }

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })