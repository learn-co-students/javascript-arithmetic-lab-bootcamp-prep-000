function add(a,b){
  return a+b
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return a*b
}

function divide(a,b){
  return a/b
}


function inc(n){
  return ++n
}

function dec(n){
  return --n
}

function makeInt(n){
  return parseInt(n, 10)
}

function preserveDecimal(n){
  return parseFloat(n)
}

// it('add(a, b) adds two numbers and returns the result', function() {
//   expect(add(a, b)).toEqual(a + b)
// })


// it('dec(n) decrements n and returns the result', function() {
//   expect(dec(a)).toEqual(a - 1)
// })

// describe('makeInt(n)', function() {
//   it('parses n as an integer and returns the parsed integer', function() {
//     expect(makeInt(a.toString())).toEqual(a)
//   })

//   it('assumes base 10', function() {
//     expect(makeInt('0x2328')).toEqual(0)
//   })

//   it('returns NaN as appropriate', function() {
//     expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
//   })
// })

// describe('preserveDecimal(n)', function() {
//   it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//     expect(preserveDecimal('2.222')).toBe(2.222)
//   })

//   it('returns NaN as appropriate', function() {
//     expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
//   })
// })
