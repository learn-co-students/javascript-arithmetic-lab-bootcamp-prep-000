var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
function add(a, b){
  return (parseInt(a) + parseInt(b))
}
function subtract(a, b){
  return (parseInt(a) - parseInt(b))
}
function multiply(a, b){
  return (parseInt(a) * parseInt(b))
}
function divide(a, b){
  return (parseInt(a) / parseInt(b))
}
function inc(n){
  return ((n) += 1)
}
function dec(n){
  return ((n) -=1)
}