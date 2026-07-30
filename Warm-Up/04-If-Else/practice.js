```javascript
// ======================================
// Warm-Up 04 - If-Else
// practice.js
// ======================================

// ------------------------------
// Program 1: Positive or Negative
// ------------------------------

let number = -5;

if (number >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


// ------------------------------
// Program 2: Even or Odd
// ------------------------------

let num = 12;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// ------------------------------
// Program 3: Eligible to Vote
// ------------------------------

let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}


// ------------------------------
// Program 4: Largest of Two Numbers
// ------------------------------

let a = 15;
let b = 30;

if (a > b) {
    console.log(a + " is Greater");
} else {
    console.log(b + " is Greater");
}


// ------------------------------
// Program 5: Grade Calculator
// ------------------------------

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// ------------------------------
// Program 6: Leap Year
// ------------------------------

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}


// ------------------------------
// Program 7: Maximum of Three Numbers
// ------------------------------

let x = 10;
let y = 25;
let z = 15;

if (x >= y && x >= z) {
    console.log("Maximum =", x);
} else if (y >= x && y >= z) {
    console.log("Maximum =", y);
} else {
    console.log("Maximum =", z);
}


// ------------------------------
// Program 8: Divisible by 5 and 11
// ------------------------------

let value = 55;

if (value % 5 === 0 && value % 11 === 0) {
    console.log("Divisible by both 5 and 11");
} else {
    console.log("Not Divisible by both");
}


// ------------------------------
// Program 9: Password Check
// ------------------------------

let password = "admin123";

if (password === "admin123") {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// ------------------------------
// Program 10: Nested If
// ------------------------------

let studentAge = 19;
let hasID = true;

if (studentAge >= 18) {
    if (hasID) {
        console.log("Entry Allowed");
    } else {
        console.log("ID Required");
    }
} else {
    console.log("Not Eligible");
}
```
