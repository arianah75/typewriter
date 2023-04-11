const sentence = "hello there from lighthouse labs";
let pause = 0; // so the first letter to be shown instant

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, pause);
  pause += 50; // we want 50 ms delay.
}

setTimeout(() => {
  process.stdout.write('\n'); //insertaion of line instant.
}, pause);
