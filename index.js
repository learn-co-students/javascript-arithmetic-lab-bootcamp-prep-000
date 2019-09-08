function add(a, b) {
  return (a+b)
}

function subtract(a, b) {
  return (a-b)
}

function multiply(a,b) {
  return a*b
}

function divide(a,b) {
  return a/b  
}

function inc(n) {
  return ++n
}

function dec(n) {
  return --n
}

function makeInt(n) {
  return parseInt(n)
}

function makeInt(num) {
  return parseInt(num, 10)
}

function preserveDecimal(n) {
  return parseFloat(n)
}




describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})