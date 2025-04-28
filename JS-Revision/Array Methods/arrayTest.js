// flatten array using reduce method without using flat method

let nestedArray = [1, [2, 3, [4, [5]]]];

const flattenDeep = (nestedArray) => {
return nestedArray.reduce((acc, ele) => {
  return  Array.isArray(ele) ? acc.concat(flattenDeep(ele)) : acc.concat(ele);
}, []);
}
console.log(flattenDeep(nestedArray))




