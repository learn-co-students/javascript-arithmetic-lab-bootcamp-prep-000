var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

it('add(a, b) adds two numbers and returns the result', function result() {
  a = 3
  b = 4
  return result
  expect(add(a, b)).toEqual(a + b)
})

it('subtract(a, b) subtracts b from a and returns the result', function subtract() {
  3 - 4
  return  subtract
  expect(subtract(a, b)).toEqual(a - b)
})

it('multiply(a, b) multiplies two numbers and returns the result', function multiply() {
  9 * 9
  return multiply
  expect(multiply(a, b)).toEqual(a * b)
})

it('divide(a, b) divides a by b and returns the result', function divide() {
  8 / 2
  return divide
  expect(divide(a, b)).toEqual(a / b)
})

it('inc(n) increments n and returns the result', function inc() {
  var number = 5
  number++
  return inc
  expect(inc(a)).toEqual(a + 1)
})

it('dec(n) decrements n and returns the result', function dec() {
  var number = 3
  number--
  return dec
  expect(dec(a)).toEqual(a - 1)
})

describe('makeInt(10)', function makeInt() {
    ('2', 8)
    return makeInt
  it('parses n as an integer and returns the parsed integer', function parseInt() {
    ('2', 8)
    return parseInt

    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function preserves() {
    parseFloat('80.1299')
    return preserves
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function NaN() {
    parseInt('Hello', 8)
    return NaN
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
