var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

console.log('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
})

console.log('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})

console.log('multiply(a, b) multiplies two numbers and returns the result', function() {
  expect(multiply(a, b)).toEqual(a * b)
})

console.log('divide(a, b) divides a by b and returns the result', function() {
  expect(divide(a, b)).toEqual(a / b)
})

console.log('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})

console.log('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})

describe('makeInt(n)', function() {
  console.log('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  console.log('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  console.log('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  console.log('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  console.log('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
