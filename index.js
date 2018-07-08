function add(a, b) {
  return a + b
}

add(51, 7)


function subtract(a, b) {
 return a - b 
}

subtract(90, 50)

function multiply(a, b) {
 return a * b
}

multiply(7, 8)

function divide(a, b) {
  return a / b
}

function inc(a) {
  return a + 1
}

function dec(a) {
  return a - 1
}

function makeInt(a) {
 return parseInt(a, 10)
}

function preserveDecimal(g) {
  return parseFloat(g)
}

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
