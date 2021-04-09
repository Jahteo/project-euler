// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function nthPrime () {
  // count upwards
    // check if a number is a prime
      //  loop upwards from 2 - number,
        // if number is evenly divisible by any of those, break & move on to next outer count
        // if not, it is a prime, increase counter by 1
    // when counter = 10001, return the number

    let potentialPrime = 2
    let primeCounter = 0
  while (primeCounter < 10000) {
    for (let divider = 2; divider < potentialPrime; divider++) {
      if (potentialPrime % divider == 0) {
        break
      }
      if (divider == potentialPrime -1) {
        primeCounter += 1

      }
    }
    potentialPrime += 1
  }
  console.log(potentialPrime -1, primeCounter)
  // console.log
}

nthPrime()