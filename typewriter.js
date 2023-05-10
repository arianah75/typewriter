const sentence = "hello there from lighthouse labs";
let pause = 0; // so the first letter to be shown instant

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, pause);
  pause += 50;
}

setTimeout(() => {
  process.stdout.write('\n'); //insertaion of line instant.
}, pause);
