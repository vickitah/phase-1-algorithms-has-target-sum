function hasTargetSum(array, target) {
  let seenNumbers = new Set(); // Stores numbers we've seen

  for (let num of array) {
    let complement = target - num; // Find the number needed to reach the target
    if (seenNumbers.has(complement)) {
      return true; // If the complement exists, we found a pair
    }
    seenNumbers.add(num); // Add current number to the set
  }

  return false; // No pair found
}

/* 
  Big O Time Complexity: O(n) - We loop through the array once.
  Space Complexity: O(n) - We store numbers in a Set.
*/

/* 
  Pseudocode:
  - Create an empty Set to store seen numbers.
  - Loop through each number in the array.
  - Calculate the complement (target - current number).
  - If the complement exists in the set, return true.
  - Otherwise, add the current number to the set.
  - If no pair is found, return false.
*/

/*
  Explanation:
  - We iterate through the array once.
  - We use a Set to store numbers we’ve seen so far.
  - If at any point the complement exists in the set, return true.
  - Otherwise, we return false after the loop ends.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
