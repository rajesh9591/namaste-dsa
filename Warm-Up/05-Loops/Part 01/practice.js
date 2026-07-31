```javascript
// ======================================
// Warm-Up 05 - Loops (Part 1)
// practice.js
// ======================================

// ------------------------------
// Program 1: Print 1 to 10
// ------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// ------------------------------
// Program 2: Print 10 to 1
// ------------------------------

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ------------------------------
// Program 3: Print Even Numbers
// ------------------------------

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// ------------------------------
// Program 4: Print Odd Numbers
// ------------------------------

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}


// ------------------------------
// Program 5: Sum of Numbers
// ------------------------------

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum =", sum);


// ------------------------------
// Program 6: Multiplication Table
// ------------------------------

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// ------------------------------
// Program 7: Squares
// ------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(i + " -> " + (i * i));
}


// ------------------------------
// Program 8: Cubes
// ------------------------------

for (let i = 1; i <= 10; i++) {
    console.log(i + " -> " + (i * i * i));
}


// ------------------------------
// Program 9: Count Down
// ------------------------------

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log("Blast Off!");


// ------------------------------
// Program 10: Skip Multiples of 3
// ------------------------------

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}
```
