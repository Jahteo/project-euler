// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// brute force:
  //find all triplets
  // check if their sum ==1000
    // return product of a*b*c

  //find all factors of 1000,
    //test if they're a proper p' triplet
    //return if so.

  //possible theories to help:
    //abc should all be near each other
    //what can I exclude? 1's?


  // run a square root check on each variable
  //outer loop will count a from 1 -997
    //inner loop will count b from 2 - 997
      // & test if c is valid in pythagorean theorum
        //if so, return the product

function isSquarable (n) {
  return Number.isInteger(Math.sqrt(n))
}

function findTripletProd() {
  for (let a2 = 1; a2 < 1000000; a2++) {
    if (isSquarable(a2)) {
      for (let b2 = a2; b2 < 1000000; b2++) {
        if (isSquarable(b2)) {
          // console.log("a2 & b2 passed:", a2, b2)
          let c2 = a2 + b2
          if (isSquarable(c2)) {
            // console.log("squares!!!!", a2,b2,c2)
            let a = Math.sqrt(a2)
            let b = Math.sqrt(b2)
            let c = Math.sqrt(c2)
            // console.log("sqrt's!!!!", a,b,c)
            if (a + b + c == 1000) {
              let product = a*b*c
              console.log("product:", product)
              return product
            }
          }
        }
      }
    }
  }
}

findTripletProd()