# Warm-Up 06 – Loops (Part 2)

## Topic

In this lesson, we learned how to use loops to traverse an array and solve common problems.

---

## What is Array Traversal?

Array traversal means visiting each element of an array one by one using a loop.

Example:

```javascript
const arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

---

## Why Do We Use Loops with Arrays?

* Search for an element.
* Count elements based on a condition.
* Find the largest element.
* Find the smallest element.
* Perform operations on every element.

---

## Problems Covered

1. Search an element in an array.
2. Count negative numbers.
3. Find the largest element.
4. Find the smallest element.

---

## Key Points

* Use `arr.length` while traversing an array.
* Start from index `0`.
* Compare every element while traversing.
* Return the required result after the loop finishes.
* Time Complexity for all these problems is **O(n)** because every element is visited once.

---

## Interview Points

* How do you search an element in an array?
* Difference between linear search and binary search.
* How do you find the largest/smallest element in one traversal?
* What is the time complexity of traversing an array?

---

## Key Takeaways

* Loops are used to traverse arrays.
* One traversal is enough for many array problems.
* Linear traversal has **O(n)** time complexity.
* Array traversal is one of the most fundamental DSA concepts.
