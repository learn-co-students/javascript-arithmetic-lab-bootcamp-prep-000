var a
var b
function add(a, b) {return a+b}
function subtract(a, b) {return a-b}
function multiply(a, b) {return a*b}
function divide(a, b) {return a/b}
add(1, 80) //81
subtract(60, 40) //20
multiply(2, 3.4) //6.8
divide(5.0, 2.5) //2

var n
function inc(n) {n++
return n}
function dec(n) {n--
return n}
inc(n)
dec(n)

function makeInt(n) {return (parseInt(n, 10))}
function preserveDecimal(n){return (parseFloat(n))}
makeInt(n)
preserveDecimal(n)
