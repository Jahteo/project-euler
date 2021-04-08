// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//       isPrime = false;
//       break;
//   }
// }


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
  //make a list of primes less than the number
    // check if it's a prime by seeing if it's divisible by any number between 2 - itself. if it's divisible by one, exit loop early. If not divisible by any, add it to the list of primes
  // loop through primes, & if the number is cleanly divisible by that prime, track that prime as the current largest
  // return largest

  let highest = 1
  let current = input
  while (current > 1) {
    // let lastPrime = 1
    // find the next prime
    for (let i = highest; i <= current; i++){
      // if current is divisble by that prime, catch it as the highest & make current the result
      // console.log(i)
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