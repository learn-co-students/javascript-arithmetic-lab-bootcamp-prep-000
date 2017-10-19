function add(a, b) {
  return a + b
}
function subtract(c, d) {
  return c - d
}
function multiply(e, f) {
  return e*f
}
function divide(g, h) {
  return g/h
}
function inc(n) {
  n += 1;
  return n
}
function dec(n) {
  n -= 1;
  return n
}
function makeInt(n) {
  return parseInt(n, 10)
}
function preserveDecimal(n) {
  return parseFloat(n)
}
// it('inc(n) increments n and returns the result', function() {
//   expect(inc(a)).toEqual(a + 1)
// })
//
// it('dec(n) decrements n and returns the result', function() {
//   expect(dec(a)).toEqual(a - 1)
// })
//
// describe('makeInt(n)', function() {
//   it('parses n as an integer and returns the parsed integer', function() {
//     expect(makeInt(a.toString())).toEqual(a)
//   })
//
//   it('assumes base 10', function() {
//     expect(makeInt('0x2328')).toEqual(0)
//   })
//
//   it('returns NaN as appropriate', function() {
//     expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
//   })
// })
//
// describe('preserveDecimal(n)', function() {
//   it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
//     expect(preserveDecimal('2.222')).toBe(2.222)
//   })
//
//   it('returns NaN as appropriate', function() {
//     expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
//   })
// })
//
