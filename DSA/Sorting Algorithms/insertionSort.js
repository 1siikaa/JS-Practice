// Insertion Sort: It repeatedly takes an element from unsorted part of the array and inserts into its correct position within the sorted part of the array.

const applyInsertionSort = (arr, n) => {
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
};

console.log(applyInsertionSort([43, 22, 11, 33, 54, 6, 8], 7));

/* Time Complexity = Average, Worst is O(n^2)
   Best if array is already sorted then O(n)
*/
// Space Complexity = O(1) = constant space complexity
