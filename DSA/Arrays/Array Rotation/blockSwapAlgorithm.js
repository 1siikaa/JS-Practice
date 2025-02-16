function swapping(arr, a, b, n){
 let temp;
 for(let i=0; i<n; i++){
   temp = arr[a+i];
   arr[a+i] = arr[b+i];
   arr[b+i] = temp;
 }
}

function blockSwapping(arr, d){
  let n = arr.length;
  if(d==0 || d==n) return;
  let a = d;
  let b = n-d;
  while(a != b){
   if(a < b){
    swapping(arr, d-a, a+b-d, a)
    b -= a;
   }
   else{
    swapping(arr, d-a, d, b)
    a -= b;
   }
  }
  swapping(arr, d-a, d, a);
  return arr;
}

console.log(blockSwapping([1, 2, 3, 4, 5, 6], 3));


