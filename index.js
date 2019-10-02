function add(a, b) {  // Should add A + B and return
    return `${a + b}` 
}

function subtract(a, b) {  // Should subtract A - B and return
    return `${a - b}`
}

function multiply(a, b) {  // Should multiply A * B and return
    return `${a * b}`
}

function divide(a, b) {   // Should divide A by B and return
    return `${a / b}`
}
function inc(n) {      // Should increase n by inc of 1
    return `${n += 1}`
}
function dec(n) {    // Should decrease n by dec of 1
    return `${n -= 1}`
}
function makeInt(n) {  //parses n as an integer and returns the parsed integer
    return `${parseInt(n, 10)}`
}

function preserveDecimal(n) {  // preserves decimals and returns NaN when needed
    return `${parseFloat(n)}`
}