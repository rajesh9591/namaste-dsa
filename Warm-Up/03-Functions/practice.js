```javascript
// =====================================
// Warm-Up 03 - Functions
// practice.js
// =====================================

// ------------------------------
// Program 1: Simple Function
// ------------------------------

function greet() {
    console.log("Hello, Rajesh!");
}

greet();


// ------------------------------
// Program 2: Function with Parameters
// ------------------------------

function welcome(name) {
    console.log("Welcome " + name);
}

welcome("Rajesh");


// ------------------------------
// Program 3: Addition
// ------------------------------

function add(a, b) {
    return a + b;
}

console.log("Addition =", add(10, 20));


// ------------------------------
// Program 4: Subtraction
// ------------------------------

function subtract(a, b) {
    return a - b;
}

console.log("Subtraction =", subtract(20, 10));


// ------------------------------
// Program 5: Multiplication
// ------------------------------

function multiply(a, b) {
    return a * b;
}

console.log("Multiplication =", multiply(5, 4));


// ------------------------------
// Program 6: Square
// ------------------------------

function square(num) {
    return num * num;
}

console.log("Square =", square(5));


// ------------------------------
// Program 7: Even or Odd
// ------------------------------

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
}

console.log(checkEvenOdd(7));


// ------------------------------
// Program 8: Maximum of Two Numbers
// ------------------------------

function maximum(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

console.log("Maximum =", maximum(25, 40));


// ------------------------------
// Program 9: Area of Rectangle
// ------------------------------

function area(length, width) {
    return length * width;
}

console.log("Area =", area(10, 5));


// ------------------------------
// Program 10: Celsius to Fahrenheit
// ------------------------------

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log("Temperature =", celsiusToFahrenheit(30), "°F");
```
