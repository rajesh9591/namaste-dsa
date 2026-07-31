```javascript
// ======================================
// Warm-Up 06 - Loops (Part 2)
// practice.js
// ======================================

// --------------------------------------
// Q1. Search an element in an array
// --------------------------------------

function searchElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const arr1 = [10, 20, 30, 40, 50];

console.log(searchElement(arr1, 30));
console.log(searchElement(arr1, 100));


// --------------------------------------
// Q2. Count negative numbers
// --------------------------------------

function countNegative(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }

    return count;
}

const arr2 = [2, -5, 7, -1, -8, 10];

console.log(countNegative(arr2));


// --------------------------------------
// Q3. Find the largest number
// --------------------------------------

function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const arr3 = [12, 45, 7, 89, 23];

console.log(findLargest(arr3));


// --------------------------------------
// Q4. Find the smallest number
// --------------------------------------

function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

const arr4 = [12, 45, 7, 89, 23];

console.log(findSmallest(arr4));
```
