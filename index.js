
var a = 2;
var b = 1;


//1
function add(a, b) {
  return(a+b)
}

//2
function subtract(a, b) {
  return(a-b)
}

//3
function multiply(a, b) {
  return(a*b)
}

//4
function divide(a, b) {
  return(a/b)
}

//5
function inc(n) {
  return (a+=1);
}

inc(a);

}
/*
---increment and decrement---

it('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})

it('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})

---increment and decrement---
//7

describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

//8

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

//9

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

//10

describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

//11
  
  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})



*/