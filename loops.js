console.log("=== JavaScript Loop Outputs ===");

console.log("== for ==");
for (let i = 0; i < 3; i++) {
  console.log("for loop:", i);
}

console.log("== while ==");
let w = 0;
while (w < 3) {
  console.log("while loop:", w);
  w++;
}

console.log("== do...while ==");
let d = 0;
do {
  console.log("do...while loop:", d);
  d++;
} while (d < 3);

console.log("== for...in ==");
const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log("for...in:", key, obj[key]);
}

console.log("== for...of ==");
const arr = ["x", "y", "z"];
for (let val of arr) {
  console.log("for...of:", val);
}

  