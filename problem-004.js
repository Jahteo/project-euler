// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num) {
  stringified = num.toString()
  let frontIndex = 0
  let lastIndex = stringified.length - 1
  while (frontIndex < lastIndex) {
    if (stringified[frontIndex] != stringified[lastIndex]) {
      return false
    }
    frontIndex += 1
    lastIndex -= 1
  }
  // console.log("Found palindrome!", stringified )
  return true
}

function isCleanlyDivisible(palindrome) {
  let num = 999
  while (num > 1) {
    if (palindrome % num == 0 && palindrome/num <= 999) {
      // console.log("palindrome ", palindrome, " is divisible by ", num)
      num -= 1
      return true
    }
    num -= 1
  }
  return false
}

function largestPalindrome() {
  // find max potential palindrome
  // count downwards from max
    // check if number is a palindrome
    // check if number is divisible by 2 3-digit numbers
      // return first number to pass both checks
  let maxPotential = 999 * 999

  while (maxPotential > 1) {
    if (isPalindrome(maxPotential)) {
      if (isCleanlyDivisible(maxPotential)) {
        console.log("biggest palindrome:", maxPotential)

        return maxPotential
      }
    }
    maxPotential -= 1
  }

}

largestPalindrome()
