function add(a, b) {
  return(a + b);
}

function subtract(a, b) {
  return(a - b);
}

function multiply(a, b) {
  return(a * b);
}

function divide(a, b) {
  return(a / b);
}

function inc(a) {
  return(a + 1);
}

function dec(a) {
  return(a - 1);
}

function makeInt(n) {
  parseInt(n, 10);
}

function makeInt(n) {
  return( parseInt(n, 10) );
}

function preserveDecimal(n) {
  parseFloat(n, 10);
}

function preserveDecimal(n) {
  return( parseFloat(n, 10) );
}



/* it('assumes base 10', function() {
  expect(makeInt('0x2328')).toEqual(0)
})

it('returns NaN as appropriate', function() {
  expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
})
})

describe('preserveDecimal(n)', function() {
it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
  expect(preserveDecimal('2.222')).toEqual(2.222)
})

it('returns NaN as appropriate', function() {
  expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
})
}) */
