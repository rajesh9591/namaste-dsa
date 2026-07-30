# Warm-Up 03 – Functions

## What is a Function?

A **function** is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, we write it once inside a function and call it whenever needed.

---

## Why Do We Use Functions?

* Avoid code duplication.
* Improve code readability.
* Make programs modular.
* Easier to debug and maintain.
* Reuse the same logic multiple times.

---

## Function Syntax

```javascript
function functionName(parameters) {
    // code
}
```

Example:

```javascript
function greet() {
    console.log("Hello, World!");
}
```

---

## Function Call

A function executes only when it is called.

Example:

```javascript
greet();
```

---

## Parameters and Arguments

**Parameters** are variables defined in the function.

**Arguments** are the actual values passed during the function call.

Example:

```javascript
function add(a, b) {
    return a + b;
}

add(10, 20);
```

* Parameters → `a`, `b`
* Arguments → `10`, `20`

---

## Return Statement

The `return` keyword sends a value back to the function caller.

Example:

```javascript
function square(num) {
    return num * num;
}
```

---

## Types of Functions

### Function without Parameters

```javascript
function hello() {
    console.log("Hello");
}
```

---

### Function with Parameters

```javascript
function greet(name) {
    console.log("Hello " + name);
}
```

---

### Function with Return Value

```javascript
function multiply(a, b) {
    return a * b;
}
```

---

## Advantages of Functions

* Reusable
* Easy to understand
* Easy to test
* Reduces code repetition

---

# Key Takeaways

* A function is a reusable block of code.
* Functions execute only when called.
* Parameters receive values.
* Arguments pass values.
* `return` sends a value back.

```
```
