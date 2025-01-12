const reverseArrToLeft = (arr, n) => {
  const temp = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
  return arr;
};

const reverseArrToRight = (arr, n, d) => {
  const temp = arr[n - 1];
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
};

const rotateArrByDToLeft = (arr, d) => {
  if (!arr.length) return arr;
  if (!d) return arr;
  const n = arr.length;
  d %= n;
  for (let i = 0; i < d; i++) {
    arr = reverseArrToLeft(arr, n);
  }
  return arr;
};

const rotateArrByDToRight = (arr, d) => {
  if (!arr.length) return arr;
  if (!d) return arr;
  const n = arr.length;
  d %= n;
  for (let i = 0; i < d; i++) {
    arr = reverseArrToRight(arr, n, d);
  }
  return arr;
};

console.log(rotateArrByDToLeft([1, 2, 3, 4, 5], 7));
console.log(rotateArrByDToRight([1, 2, 3, 4, 5], 7));
