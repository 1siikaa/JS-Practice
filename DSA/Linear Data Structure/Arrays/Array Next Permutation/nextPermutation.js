/* Given an array arr[] of size n, the task is to print the lexicographically next greater permutation of the given array. If there does not exist any greater permutation, then find the lexicographically smallest permutation of the given array.
Let us understand the problem better by writing all permutations of [1, 2, 4] in lexicographical order: [1, 2, 4], [1, 4, 2], [2, 1, 4], [2, 4, 1], [4, 1, 2] and [4, 2, 1]. If we give any of the above (except the last) as input, we need to find the next one in sequence. 
If we give last as input, we need to return the first one. */

const findNextPermutation = arr => {
  try {
    let index = -1;
    let n = arr.length;
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] < arr[i + 1]) {
        index = i;
        break;
      }
    }
    console.log(index);
    if (index === -1) {
      return arr.reverse();
    }

    for (let i = n - 1; i > index; i--) {
      if (arr[i] > arr[index]) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        break;
      }
    }

    let f = index + 1;
    let l = n - 1;

    while (f < l) {
      [arr[f], arr[l]] = [arr[l], arr[f]];
      f += 1;
      l -= 1;
    }
    return arr;
  } catch (error) {
    console.log(error);
  }
};

console.log(findNextPermutation([2, 4, 1, 7, 5, 0]));
