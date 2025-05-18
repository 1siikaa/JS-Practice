var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  let mapWindow = new Map();

  for (let ele of t) {
    mapWindow.set(ele, (mapWindow.get(ele) || 0) + 1);
  }

  let l = 0,
    r = 0,
    count = 0;
  let startingIdx = -1;
  let minLength = 10 ** 9;

  while (r < s.length) {
    if (mapWindow.get(s[r]) && mapWindow.get(s[r]) > 0) {
      count++;
    }
    mapWindow.set(s[r], (mapWindow.get(s[r]) || 0) - 1);

    while (count == t.length) {
      if (r - l + 1 < minLength) {
        minLength = r - l + 1;
        startingIdx = l;
      }
      mapWindow.set(s[l], mapWindow.get(s[l]) + 1);
      if (mapWindow.get(s[l]) > 0) {
        count--;
      }
      l++;
    }
    r++;
  }
  return startingIdx == -1
    ? ""
    : s.substring(startingIdx, minLength + startingIdx);
};

console.log(minWindow("cabwefgewcwaefgcf", "cae"));
