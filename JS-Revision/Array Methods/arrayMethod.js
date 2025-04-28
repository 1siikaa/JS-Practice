console.log("🔍 Testing Array Methods on an EMPTY Array");

let emptyArr = [];

function log(title, result, modifiedArray = null) {
  console.log(`\n--- ${title} ---`);
  console.log("Result:", result);
  if (modifiedArray !== null) {
    console.log("Modified Array:", modifiedArray);
  }
}

// Mutating methods
log("push()", emptyArr.push(1), emptyArr); 
emptyArr = [];

log("pop()", emptyArr.pop(), emptyArr);
log("shift()", emptyArr.shift(), emptyArr);
log("unshift()", emptyArr.unshift(1), emptyArr);
emptyArr = [];

log("reverse()", emptyArr.reverse(), emptyArr);
log("sort()", emptyArr.sort(), emptyArr);
log("splice()", emptyArr.splice(0, 1), emptyArr);
log("fill()", emptyArr.fill(5), emptyArr);
log("copyWithin()", emptyArr.copyWithin(0, 1), emptyArr);

// Non-mutating methods
log("map()", emptyArr.map(x => x * 2));
log("filter()", emptyArr.filter(x => x > 2));

try {
  log("reduce()", emptyArr.reduce((acc, val) => acc + val));
} catch (e) {
  console.log("reduce() threw an error:", e.message);
}

try {
  log("reduceRight()", emptyArr.reduceRight((acc, val) => acc + val));
} catch (e) {
  console.log("reduceRight() threw an error:", e.message);
}

log("forEach()", emptyArr.forEach(x => console.log(x)));
log("some()", emptyArr.some(x => x > 2));
log("every()", emptyArr.every(x => x > 2));
log("find()", emptyArr.find(x => x > 2));
log("findIndex()", emptyArr.findIndex(x => x > 2));
log("includes(5)", emptyArr.includes(5));
log("indexOf(5)", emptyArr.indexOf(5));
log("lastIndexOf(5)", emptyArr.lastIndexOf(5));
log("concat([1,2])", emptyArr.concat([1, 2]));
log("slice(0,1)", emptyArr.slice(0, 1));
log("join()", emptyArr.join(","));
log("toString()", emptyArr.toString());
log("flat()", emptyArr.flat());
log("flatMap()", emptyArr.flatMap(x => [x, x * 2]));

let keys = [...emptyArr.keys()];
let values = [...emptyArr.values()];
let entries = [...emptyArr.entries()];
log("keys()", keys);
log("values()", values);
log("entries()", entries);
log("at(0)", emptyArr.at(0));