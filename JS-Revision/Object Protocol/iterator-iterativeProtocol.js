const iterative = {
    counter: 0,
    next () {
        return {
        value: this.counter++,
        done:  this.counter > 10
        }
    }
}

let result; 
do {
  result = iterative.next();
  if(!result.done){
  console.log(result.value);
  }
}
while(!result.done);

