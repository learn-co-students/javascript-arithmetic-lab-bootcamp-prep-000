function add(a, b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a, b){
  return a*b;
}

function divide(a, b){
  return a/b;
}

function inc(n){
  return n+=1;
}

function dec(n){
  return n-=1;
}
//
// function makeInt(n){
//   if (n.toString) {
//     return parseInt(n);
//   // } else if (n ='0x2328') {
//   //   return parseInt('0x2328', 10);
//   }else {
//     if (n === 'sldkjflksjf') {
//        return NaN;
//     }
//   }
// }


function makeInt(n){
  //if (n = n.toString) {
    return parseInt(n);
  //}
}

function makeInt(n){
  if (n === 'sldkjflksjf') {
  return NaN;
 }
}

function makeInt(n){
//  if (n = n ) {
      return parseInt(n, 10)
//  }
}

// function preserveDecimal(n){
//   //if (n.toString) {
//     return parseFloat(n)
// //  }
// }
//
// function preserveDecimal(n){
//   if (n === 'sldkjflksjf') {
//     return NaN;
//   }
// }

function preserveDecimal(n){
  if (n.toString) {
    return parseFloat(n)
  }else if (n === 'sldkjflksjf') {
    return NaN;
  }
}
