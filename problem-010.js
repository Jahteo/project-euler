// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


// track sum
// count up to 2 million
  //if number is not  evenly divisible by any number less than it, it's a prime
    // incremement sum if prime

    // DESPERATELY NEEDS OPTIMIZATION!!!

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n%i == 0) {
      return false
    }
  }
  return true
}

function sumPrimes (maxN) {
  let sum = 0
  for (let i = 2; i < maxN; i++) {
    // console.log(i)
    if (isPrime(i)) {
      sum += i
      // console.log(sum)
    }
  }
  console.log(sum)
}

sumPrimes(10)
sumPrimes(2000000)