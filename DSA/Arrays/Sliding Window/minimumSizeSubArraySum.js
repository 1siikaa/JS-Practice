var minSubArrayLen = function (target, nums) {
  if (!nums.length || target == 0) {
    return 0;
  }
  let l = 0,
    r = 0,
    sum = 0;
  let minLength = 10 ** 9;
  let startIdx = -1,
    endingIdx = -1;
  while (r < nums.length) {
    sum += nums[r];
    while (sum >= target) {
      startIdx = l;
      endingIdx = r;
      minLength = Math.min(minLength, r - l + 1);
      sum -= nums[l];
      l++;
    }
    r++;
  }
  console.log(startIdx, endingIdx, minLength)
  return minLength == 10**9 ? 0 : minLength;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
