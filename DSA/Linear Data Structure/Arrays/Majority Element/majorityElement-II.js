// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

function majorityElementII(arr) {
  const size = arr.length;
  let count1 = 0,
    count2 = 0;
  let ele1, ele2;
  let majorityElements = [];

  for (let i = 0; i < size; i++) {
    if (count1 == 0 && arr[i] !== ele2) {
      ele1 = arr[i];
      count1++;
    } else if (arr[i] == ele1) {
      count1++;
    } else if (arr[i] == ele2) {
      count2++;
    } else if (count2 == 0 && arr[i] !== ele1) {
      ele2 = arr[i];
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  (count1 = 0), (count2 = 0);
  for (let i = 0; i < size; i++) {
    if (arr[i] == ele1) {
      count1++;
    }
    if (arr[i] == ele2) {
      count2++;
    }
  }
  if (count1 > Math.floor(size / 3)) {
    majorityElements.push(ele1);
  }
  if (count2 > Math.floor(size / 3)) {
    majorityElements.push(ele2);
  }

  return majorityElements;
}

console.log(majorityElementII([1, 2]));
