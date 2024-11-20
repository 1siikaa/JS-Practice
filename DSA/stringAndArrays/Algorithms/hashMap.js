// Map() -
// The Map() constructor creates Map objects.
// Method to create a map object.
console.log(new Map()); 
// Iterables in a map object
let mapIterable1 = new Map([[ 1, 'one'],[ 2, 'two' ]]);
console.log(mapIterable1)
let mapIterable2 = new Map(Object.entries({1: 'one', 2: 'two'}));
console.log(mapIterable2);
console.log(mapIterable1.get(1), mapIterable1.get(2));
console.log(mapIterable2.get('1'), mapIterable2.get('2'));
const map1 = new Map();
map1.set('a', 1);
map1.set(['k', 9], ['k','l'])
console.log(map1)
for (const value of map1.values()) {
  console.log(`Value: ${value}`);
};
for (const [key, value] of map1.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}
for (const value of map1.keys()) {
  console.log(`Value: ${value}`);
};
console.log(map1.has('b'));
console.log(map1.has('a'));
console.log(map1.get('a'));
console.log(map1.size);
console.log(map1.delete('a'));
console.log(map1.clear());
console.log(map1)
