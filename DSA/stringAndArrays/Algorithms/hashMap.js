// Map() -
// The Map() constructor creates Map objects.
// Method to create a map object.
console.log(new Map()); 
// Iterables in a map object
let mapIterable1 = new Map([[ 1, 'one'],[ 2, 'two' ]]);
let mapIterable2 = new Map(Object.entries({1: 'one', 2: 'two'}));
console.log(mapIterable1.get(1), mapIterable1.get(2));
console.log(mapIterable2.get('1'), mapIterable2.get('2'));




