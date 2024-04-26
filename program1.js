function smallestMissingPositiveInteger(nums) {
  // Remove non-positive integers
  nums = nums.filter(num => num > 0);
  
  // usinSort the array
  nums.sort((a, b) => a - b);
  
  // Iterate through the sorted array to find the smallest missing positive integer
  let smallestMissing = 1;
  for (const num of nums) {
      if (num === smallestMissing) {
          smallestMissing++;
      } else if (num > smallestMissing) {
          return smallestMissing;
      }
  }
  
  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;


