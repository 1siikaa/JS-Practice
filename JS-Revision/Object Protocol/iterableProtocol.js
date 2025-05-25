const iterable = {
    counter: 0,
    [Symbol.iterator]() {
        return this;
    },
    next () {
        return {
        value: this.counter++,
        done:  this.counter > 10
        }
    }
}

for (const value of iterable) {
    console.log(value);
}