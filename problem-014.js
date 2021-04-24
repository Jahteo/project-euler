// Longest Collatz sequence
// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.

//brute force solution:
// track length oflongest chain & starting number associated with it
//optimaziation: make a hashmap tracking prev numbers and length of chain from that point.
  //note, there should be a better way of tracking not just the starting number and it's list length, but the length at every point along it's path. ex: in example given, should track 40, 20, & 16 even before starting at 14. Suspect this would use recursion.
//iterate up to 1,000,000
  //track current length for this number
  //while: num is bigger than 1
    //if number is in hashmap, add the length of chain from that point to current length and escape while loop
    //if even, divide by 2
    // if odd, multiple by 3 & add 1

  // if final current length is better than longestChainLen, replace with current length and number

// return longest num

function longestChainLen(last) {
  let longestLen = 0
  let longestN = 0
  let hashmap = {}
  for (let i = 0; i < last +1; i++) {
    let n = i
    let currentLen = 1
    while (n>1) {
      if (n.toString in hashmap) {
        currentLen += hashmap.n
        n = 1
      } else {
        if (n%2 == 0) {
          n = n/2
        } else {
          n = n*3 +1
        }
        currentLen += 1
      }
    }
    // console.log("i, currentLen:", i, currentLen)
    hashmap[i] = currentLen
    if (currentLen > longestLen) {
      longestLen = currentLen
      longestN = i
    }
    // console.log("i", i)
  }
  console.log("longest n & len:", longestN, longestLen)
  // console.log("hashmap",  hashmap)
}

longestChainLen(1000000)