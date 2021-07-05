function add(a, b){
  return(a+b)
}

add(2, 3)

function subtract(a, b) {
  return(a-b)
}

subtract(2, 3)

function multiply(a, b) {
  return(a*b)
}

multiply(2, 3)

function divide(a, b) {
  return(a/b)
}

divide(6, 2)

function inc(n) {
  return(n + 1)
}

inc(3)

function dec(n) {
  return(n - 1)
}
dec(5)

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

function makeInt(n) {
  return(parseInt(n, 10))
}

makeInt(2, 10)
makeInt((0*2328), 10)
makeInt(sldkjflksjf, 10)

// describe('preserveDecimal(n)', function() {
//   it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//     expect(preserveDecimal('2.222')).toBe(2.222)
//   })

//   it('returns NaN as appropriate', function() {
//     expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
//   })
// })

function preserveDecimal(n){
  return(parseFloat(n, 10))
}

preserveDecimal(2.222, 10)
preserveDecimal(sldkjflksjf, 10)

