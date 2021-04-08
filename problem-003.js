// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function isPrime(number) {
  let isPrime = true
  for (i = 2; i < number-1; i++) {
    if (number%i == 0) {
      isPrime = false
      break
    }
  }
  // console.log("number, isPrime:", number, isPrime)
  return isPrime
}

function largestPrimeFactor(input){
  //loop through every prime less than the input
  // if the number is cleanly divisible by that prime, track that prime as the current largest
  // return largest

  let highest = 1
  let current = input
  while (current > 1) {
    for (let i = highest; i <= current; i++){
      // if current is divisble by that prime, catch it as the highest & make current the result. Shorten the number of calculations I need to run every time I hit a prime.
      if (isPrime(i) == true) {
        if (current%i == 0) {
          highest = i
          current = current / i
          console.log("current & highest:", current, highest)
        }
      }
    }
  }
}

largestPrimeFactor(600851475143)
console.log(600851475143/6857/1471/839/71
)
// isPrime(6)
// isPrime(7)
// isPrime(8)
// isPrime(9)
// isPrime(10)