// Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function sumAllMultiples() {
  //bonus: abstract set-making to it's own function
  //loop over every multiples of 3 until we hit 1000
    //add every number to a set
  //repear for ever multiple of 5
    //adding only unique numbers
  // return sum of set
  let x = 0
  let y = 0
  let multiples = []
  while (x < 1000) {
    multiples.push(x)
    x += 3
  }
  while (y < 1000) {
    if (!multiples.includes(y)) {
      multiples.push(y)
    }
    y += 5
  }
  const sum = multiples.reduce(function(a, b){return a + b}, 0)
  console.log(sum)
}

sumAllMultiples()