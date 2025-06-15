// selection sort is select minimum and swap it with ith element

const applySelectionSort = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx != i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr;
};

console.log(applySelectionSort([13, 56, 89, 3, 26, 34, 17, 9], 8));

// Time Complexity = Best, Average, Worst is O(n^2)
// Space Complexity = O(1) = constant space complexity