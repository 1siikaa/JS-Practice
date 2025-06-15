/* Merge Sort: 
Merge sort is sorting algorithm which divides and merges the array element by element in sorted manner.
*/

const mergeSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
  return arr;
};

const merge = (arr, low, mid, high) => {
  let tempArr = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      tempArr.push(arr[left]);
      left++;
    } else {
      tempArr.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    tempArr.push(arr[left]);
    left++;
  }
  while (right <= high) {
    tempArr.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = tempArr[i - low];
  }
};

console.log(mergeSort([5, 7, 5, 8, 0, 3, 56], 0, 6));
/* Time Complexity = Best, Average, Worst is O(n log n)
*/
// Space Complexity = O(n) = linear space complexity in worst case
