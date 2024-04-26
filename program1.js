function smallestMissingPositiveInteger(nums) {
  let n = nums.length;
  let present = new Array(n + 1).fill(false);

  for (let i = 0; i < n; i++) {
      if (nums[i] > 0 && nums[i] <= n) {
          present[nums[i]] = true;
      }
  }

  for (let i = 1; i <= n; i++) {
      if (!present[i]) {
          return i;
      }
  }

  return n + 1;
}

module.exports = smallestMissingPositiveInteger;


