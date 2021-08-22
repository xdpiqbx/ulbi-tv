function* generatorFunction() {
  for (let i = 0; i < 5; i += 1) {
    yield i;
  }
}
const iter = generatorFunction();
console.log(iter.next());
