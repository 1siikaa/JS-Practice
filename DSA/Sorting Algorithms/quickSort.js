/* Quick Sort:
   Quick Sort is a divide and conquer sorting algorithm.
   It chooses a pivot element and places it at its correct position in the sorted array.
   Elements smaller than the pivot are moved to its left, and elements greater are moved to its right.
   This process is recursively applied to the subarrays on both sides of the pivot.

   To sort in descending order, reverse the comparison conditions.
*/

const applyQuickSortAsc = (arr, low, high) => {
  if (low < high) {
    let pivot = findPartition(arr, low, high);
    applyQuickSortAsc(arr, low, pivot - 1);
    applyQuickSortAsc(arr, pivot + 1, high);
  }
  return arr;
};

const findPartition = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
};

console.log(applyQuickSortAsc([9, 6, 7, 5, 3, 4, 2, 1, 0], 0, 8));
