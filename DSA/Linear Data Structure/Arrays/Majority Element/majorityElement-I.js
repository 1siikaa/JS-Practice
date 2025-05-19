// Given an array `nums` of size `n`, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Brute Force Approach
// Nested Linear Search
//  1. Perform a linear search by selecting an element from the array.
//  2. Perform a nested linear search to count the occurrences of that element throughout the array.
//  3. Check if the element's frequency is greater than `n / 2`.
//  4. If true, break the loop and return the element as the answer.
//  5. If false, select the next element as mentioned in step 1 and repeat steps 2-4 for all array elements.
//  6. If no such element is found, return `-1`.
//  7. The time and space complexity for this brute-force approach is as follows:
//  8. Time Complexity - O(N × N) = O(N^2) due to the nested linear search.
//  9. Space Complexity - O(1) as no extra space is used.

// Better Approach
// Frequency Counter Method
//  1. Initialize a hash map data structure.
//  2. Store the frequency of each element.
//  3. Iterate through the hash map to check if any element's count is greater than `n / 2`.
//  4. If found, break the loop and return the element.
//  5. If no such element is found, return `-1`.
//  6. The time and space complexity for this approach is as follows:
//  7. Time Complexity - O(N) + O(log N) = O(N log N).
//  8. Space Complexity - O(N) due to the use of a hash map.

// Optimal Approach
// Boyer-Moore Majority Voting Algorithm
//  1. Start by iterating through the array, assuming the first element to be the majority element, and initialize its count to 1.
//  2. For each subsequent element:
//     - If the current element matches the assumed majority element, increase the count by 1.
//     - Otherwise, decrease the count by 1.
//  3. If the count becomes zero, select the next element as the new assumed majority element and reset the count to 1.
//  4. Continue this process until the end of the array.
//  5. After completing the iteration, verify whether the assumed majority element actually appears more than `n / 2` times by iterating through the array again.
//  6. If the element is found to be the majority, return it; otherwise, return `-1`.
//  7. The time and space complexity for this approach is as follows:
//  8. Time Complexity - O(N) + O(N) ≈ O(N).
//  9. Space Complexity - O(1) as no extra space is used.

// Code for Optimal Approach
function majorityElementI(nums) {
  const size = nums.length;
  let ele;
  let count = 0;
  for (let i = 0; i < size; i++) {
    if (count == 0) {
      ele = nums[i];
      count++;
    } else if (nums[i] == ele) {
      count++;
    } else if (nums[i] !== ele) {
      count--;
    }
  }
  if (count != 0) {
    if (count > Math.floor(size / 2)) {
      return ele;
    }
    count = 0;
    for (let i = 0; i < size; i++) {
      if (nums[i] == ele) {
        count++;
      }
    }
    if (count > Math.floor(size / 2)) {
      return ele;
    }
  }
  return -1;
}

console.log(majorityElementI([2,2,1,1,1,2,2]));
