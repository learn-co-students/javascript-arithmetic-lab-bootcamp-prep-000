it('add(a, b) adds two numbers and returns the result', add() {
  expect(add(a, b)).toEqual(a + b)
})

it('subtract(a, b) subtracts b from a and returns the result', subtract() {
  expect(subtract(a, b)).toEqual(a - b)
})

it('multiply(a, b) multiplies two numbers and returns the result', multiply() {
  expect(multiply(a, b)).toEqual(a * b)
})

it('divide(a, b) divides a by b and returns the result', divide() {
  expect(divide(a, b)).toEqual(a / b)
})

it('inc(n) increments n and returns the result', ++() {
  expect(inc(a)).toEqual(a + 1)
})

it('dec(n) decrements n and returns the result', --() {
  expect(dec(a)).toEqual(a - 1)
})

describe('makeInt(n)', parseInt() {
  it('parses n as an integer and returns the parsed integer', parseInt() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', parseInt() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', parseInt() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', parseFloat() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', parseFloat() {
    expect(preserveDecimal('2.222')).toEqual(2.222)
  })

  it('returns NaN as appropriate', parseFloat() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
