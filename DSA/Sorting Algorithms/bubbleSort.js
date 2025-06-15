// Bubble Sort: Bubble sort is repeatedly iterating through a list, comparing adjacent elements, and swapping them if they are in the wrong order.

const applyBubbleSort = (arr, n) => {
  let hasSwapped = false;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasSwapped = true;
      }
    }
    if (!hasSwapped) {
      break;
    }
  }
  return arr;
};

console.log(applyBubbleSort([5, 8, 2, 0, 7, 43, 12], 7));

/* Time Complexity = Average, Worst is O(n^2)
   Best if array is already sorted then O(n)
*/
// Space Complexity = O(1) = constant space complexity
