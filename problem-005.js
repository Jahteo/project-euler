// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestPositive () {
  // count upwards from 2520
  // inner loop, check if count it evenly divisible by everything under 20
    //if yes to first, continue
      // if yest to all, return it
    // if no to any, move on to next count
  let count = 2520
    while (count > 5) {
      for (let dividor = 20; dividor > 1; dividor--) {
        if (count % dividor != 0) {
          break
        }
        // console.log(count, dividor)
        if (dividor == 5) {
          console.log(count, dividor)
          return count
        }
      }
      count += 1
    }
}

smallestPositive()