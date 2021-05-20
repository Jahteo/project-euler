// Power Digit Sum
// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

function PDS (power) {
  let sum = 0
  let n =  2n**BigInt(power)
  let nStringd = n.toString()
  // console.log(nStringd)
  for (const char of nStringd) {
    sum += Number(char)
  }
  console.log(sum)
}
PDS(15)
PDS(1000)
