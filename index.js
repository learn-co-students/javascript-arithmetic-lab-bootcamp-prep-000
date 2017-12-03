function add(a, b){
  return a + b
}
function subtract(a,b){
  return a - b
}
function multiply(a,b){
  return a*b
}
function divide(a,b){
  return a/b
}
function inc(n){
  n++
  return n
}
function dec(n){
  n--
  return n
}

/*
function makeInt(n){
  n = parseInt('n',10)
  if (n.toString() === 'n') {
    n = '0'
    }
  else if ((isNaN(parseInt('n',10)))=== true) {
      n = 'true'
      }


  if (n=== NaN) {
    n == isNaN('n')
//    return console.log(n)
  }
  else if (n.toString() === n) {
    return console.log();

  }
  else {
    n = 0

  }
return n
}

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


*/

function makeInt(n){
  var x = n.toString()
  var a = parseInt('n',10)
  if (x[0]=== '0' & x[1]==='x' | "X") {
    return 0;
  }
  else if (a === isNaN('a')){
    return NaN;
  }

  else {
  return n 
  }
}








function preserveDecimal(n){
  n = parseFloat(n)
  if (n === NaN) {
    n = isNaN('n')
  }
  return n
}
