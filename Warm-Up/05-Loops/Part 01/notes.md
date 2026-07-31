# Warm-Up 05 – Loops (Part 1)

## What is a Loop?

A **loop** is used to execute a block of code repeatedly until a specified condition becomes false.

Instead of writing the same code multiple times, we use loops.

---

## Why Do We Use Loops?

* Reduce code repetition.
* Save time and effort.
* Process large amounts of data efficiently.
* Essential for solving DSA problems.

---

## Types of Loops in JavaScript

* `for` loop
* `while` loop
* `do...while` loop

This lesson focuses on the **for loop**.

---

## Syntax of for Loop

```javascript
for (initialization; condition; update) {
    // code
}
```

---

## Flow of Execution

```text
Initialization
      ↓
Condition
      ↓
True?
  Yes ─────► Execute Block
      ↑          │
      │          ▼
      └──── Update
      │
      ▼
False
      ↓
Exit Loop
```

---

## Components of a for Loop

### 1. Initialization

Executed only once before the loop starts.

Example:

```javascript
let i = 1;
```

---

### 2. Condition

Checks whether the loop should continue.

Example:

```javascript
i <= 5
```

---

### 3. Update

Changes the loop variable after every iteration.

Example:

```javascript
i++
```

---

## Advantages of Loops

* Avoid duplicate code.
* Improve readability.
* Handle repetitive tasks efficiently.
* Fundamental for DSA.

---

## Key Takeaways

* Loops execute code repeatedly.
* A `for` loop has three parts: initialization, condition, and update.
* The loop stops when the condition becomes false.
* Loops are one of the most important programming concepts in DSA.
