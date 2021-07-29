const symbol = ['\r|   ', '\r-   ', '\r\\   '];
let i = 200
for (const loadSym of symbol) {
  setTimeout(() => {
    process.stdout.write(loadSym);
  }, 100 + i);
  i += 200;
}







// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// // ... fill in the rest yourself ...