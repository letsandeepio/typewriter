const sentence = 'hello there from lighthouse labs in the cyberspace\n';
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, i);
  i += 50;
}
