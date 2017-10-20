var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

function add(a, b) {
  a += b
}

function subtract(a, b) {
  a -= b
}

function multiply(a, b) {
  a *= b
}

function divide(a, b) {
  a /= b
}

function inc(a) {
  a += 1
}

function dec(a) {
  a -= 1
}
