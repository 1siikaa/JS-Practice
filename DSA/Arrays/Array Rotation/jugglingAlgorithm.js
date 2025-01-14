const findGCD = (num1, num2) => {
  if (!num1) return num2;
  if (!num2) return num1;
  const remainder = num1 % num2;
  if (!remainder) return num2;
  return findGCD(num2, remainder);
};
const jugglingAlgorithmForLeftRotation = (arr, d) => {
  const n = arr.length;
  if (!n || !d) return arr;
  d %= n;
  const gcd = findGCD(n, d);
  for (let i = 0; i < gcd; i++) {
    const temp = arr[i];
    let j = i;
    while (1) {
      let k = j + d;
      if (k >= n) {
        k = k - n;
      }
      if (k == i) {
        break;
      }
      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
  return arr;
};

const jugglingAlgorithmForRightRotation = (arr, d) => {
  const n = arr.length;
  if (!n || !d) return arr;
  d %= n;
  const gcd = findGCD(n, d);
  for (let i = n - 1; i > n - gcd - 1; i--) {
    const temp = arr[i];
    let j = i;
    while (1) {
      let k = j - d;
      if (k < 0) {
        k = k + n;
      }
      if (k == i) {
        break;
      }
      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
  return arr;
};
console.log(findGCD(5, 3));
console.log(
  jugglingAlgorithmForLeftRotation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)
);
console.log(
  jugglingAlgorithmForRightRotation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3)
);
