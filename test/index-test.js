var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
1 + 80 // 81
60 - 40 // 20
2 * 3.4 // 6.8 (there's that floating-point arithmetic again...)
5.0 / 2.5 // 2

function(result){
  var a = '1'
  var b = '80'
  var c = '60'
  var d = '40'
  var e = '2'
  var f = '3.40'
  var g = '5.0'
  var h = '2/5'
  if ('var a' + 'var b');
  result === '81'
}
  else if ('var c' - 'var d')
  result === '20';
}
  else if ('var e' * 'var f')
  result === '6.8';
}
  else if ('var g' / 'var h')
  result === '2.5';
}
}
var a = 1000
var b = 1000
'add(a, b) adds two numbers andreturns the result', function() {
  if('add( var a, var b) === (var a + var b)')
  output(2000)
}

it('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})

it('multiply(a, b) multiplies two numbers and returns the result', function() {
  expect(multiply(a, b)).toEqual(a * b)
})

it('divide(a, b) divides a by b and returns the result', function() {
  expect(divide(a, b)).toEqual(a / b)
})

it('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})

it('dec(n) decrements n and returns the result', function() {
  expect(dec(1000)).toEqual(a - 1)
})

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

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
