const toReverse = (arr, f, l) => {
  while (f < l) {
    [arr[f], arr[l]] = [arr[l], arr[f]];
    f = f + 1;
    l = l - 1;
  }
  return arr;
};

const rotateArrToLeftByD = (arr, d) => {
  if (!arr.length || !d) return arr;
  const n = arr.length;
  d %= n;
  arr = toReverse(arr, 0, d - 1);
  arr = toReverse(arr, d, n - 1);
  arr = toReverse(arr, 0, n - 1);
  return arr;
};

const rotateArrToRightByD = (arr, d) => {
  if (!arr.length || !d) return arr;
  const n = arr.length;
  d %= n;
  arr = toReverse(arr, n - d, n - 1);
  arr = toReverse(arr, 0, n - d - 1);
  arr = toReverse(arr, 0, n - 1);
  return arr;
};

console.log(rotateArrToLeftByD([1, 2, 3, 4, 5], 2));
console.log(rotateArrToRightByD([1, 2, 3, 4, 5], 2));
