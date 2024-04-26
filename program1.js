function smallestMissingPositiveInteger(nums) {

  nums = nums.filter(num => num > 0);
  
  nums.sort((a, b) => a - b);
  
  
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


