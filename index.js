num = 10.5

function add5() {
  return num += 5
}

console.log(parseInt(add5()))
console.log(parseFloat(80.0987))
console.log(parseFloat("80.0987"))
console.log(80.0987)


function makeInt(num) {
  return parseInt(num)
}

function preserveDecimal(num) {
  return parseFloat(num)
}

console.log(makeInt(9.919))
console.log(preserveDecimal(81.81))


