var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)


      function add(a,b) {
          return a + b
      }
      function subtract(a,b) {
          return a-b
      }
      function multiply(a,b) {
         return a *= b
      }
      function divide(a, b) {
          return a/=b
      }


  add(a, b)
  subtract(a, b)
  multiply(a, b)
  divide(a, b)



    function inc(n) {
       return n += 1
     }

    function dec(n) {
       return n -= 1

    }

    inc(a)
    dec(b)

  function makeInt(n) {
     return parseInt(n, 10)
  }

makeInt()

  function preserveDecimal(a) {
    return parseFloat(a)
  }

preserveDecimal(58.33333)
preserveDecimal("wiggles")
