function add (a,b){
  var result = (a+b)
  return result
}

add(2,3)

function subtract (a,b){
  var result = (a-b)
  return result
}
add (2,3)

function multiply(a,b){
  var result = (a*b)
  return result

}
multiply(2,3)

function divide(a,b){
  var result = (a/b);
  return result
}

divide (2,3)

function inc(n){
  n++
  return n
}
inc(2)

function dec(n){
  n--
  return n
}
inc(20)

function makeInt(n){
  parseInt(n)
  return n
}
makeInt(3)

function makeInt(n){
  return parseInt(n, 10)
  
}
makeInt('0x2328')


function preserveDecimal (n){
  return parseFloat(n)
}

preserveDecimal(10.90)
