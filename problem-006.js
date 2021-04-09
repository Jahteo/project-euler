// The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


function findTheDiff () {
  // loop through to 100,
    // to find the square of the sum:
      // adding number to a normieCounter
    // to find the sum of the squares
        // adding the squared number to a squaredCounter
  //square the normie counter
  // return the diff

  let normieCounter = 0
  let squaredCounter = 0
  for (let i = 1; i <= 100; i++) {
    normieCounter += i
    squaredCounter += i**2
  }

  let diff = normieCounter**2 - squaredCounter
  console.log(diff)
  return diff
}

findTheDiff()