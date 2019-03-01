/*
var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

it('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
})

*/

function add(x,y){
  var z=x+y;
  return z;
}

/*
it('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})
*/

function subtract(x,y){
  var z = x-y;
  return z;
}
/*
it('multiply(a, b) multiplies two numbers and returns the result', function() {
  expect(multiply(a, b)).toEqual(a * b)
})
*/

function multiply(x,y){
  var z =y*x;
  return z;
}

/*
it('divide(a, b) divides a by b and returns the result', function() {
  expect(divide(a, b)).toEqual(a / b)
})
*/

function divide(x,y){
  var z = x/y;
  return z;
}

/*
it('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})
*/

function inc(x){
  var y=x;
  var z=y++;
  return y;
}

/*
it('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})
*/

function dec(x){
  var z=x;
  z--;
  return z;
}

/*
describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})
*/

function makeInt(x){
  var y=parseInt(x, 10);
  return y;
}

/*
describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
*/

function preserveDecimal(x){
  var y=parseFloat(x,10);
  return y;
}
