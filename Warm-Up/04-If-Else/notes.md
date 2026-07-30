# Warm-Up 04 – If-Else

## What is If-Else?

`if-else` is a decision-making statement that executes different blocks of code based on whether a condition is true or false.

---

## Why Do We Use If-Else?

* Make decisions in a program.
* Execute different code for different conditions.
* Control the program flow.

---

## Syntax

```javascript
if (condition) {
    // Executes if condition is true
} else {
    // Executes if condition is false
}
```

---

## Flow of If-Else

```text
Condition
    │
    ▼
Is it True?
 ┌───────┐
 │ Yes   │────────► Execute if block
 └───────┘
     │
     ▼
    No
     │
     ▼
Execute else block
```

---

## Comparison Operators

* `==` → Equal to (checks value only)
* `===` → Strict Equal (checks value and type)
* `!=` → Not Equal
* `!==` → Strict Not Equal
* `>` → Greater Than
* `<` → Less Than
* `>=` → Greater Than or Equal To
* `<=` → Less Than or Equal To

---

## Logical Operators

* `&&` → AND
* `||` → OR
* `!` → NOT

---

## If-Else If Ladder

Used when checking multiple conditions.

Example:

```javascript
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

---

## Nested If

An `if` statement inside another `if` statement.

Example:

```javascript
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry Allowed");
    }
}
```

---

## Best Practices

* Write clear conditions.
* Avoid deeply nested `if` statements when possible.
* Use meaningful variable names.
* Prefer `===` over `==` in JavaScript.

---

## Key Takeaways

* `if-else` helps make decisions.
* Conditions return either `true` or `false`.
* `else if` handles multiple conditions.
* Logical operators combine conditions.
* Decision making is a fundamental programming skill.
