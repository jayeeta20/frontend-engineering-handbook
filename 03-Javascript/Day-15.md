# Day 15 - JavaScript Data Types

## Module 4 - JavaScript Fundamentals

---

# Learning Objectives

By the end of Day 15, I learned:

- What is a Data Type
- Why Data Types are important
- Primitive Data Types
- Number
- String
- Boolean
- undefined
- null
- Symbol
- BigInt
- typeof Operator

---

# 1. What is a Data Type?

A Data Type tells JavaScript what kind of value a variable stores.

Example

```javascript
let age = 30;
let name = "Jayeeta";
let isLoggedIn = true;
```

Here,

- 30 → Number
- "Jayeeta" → String
- true → Boolean

---

# 2. Why are Data Types Important?

JavaScript needs to know what kind of value it is working with.

Example

```javascript
let price = 500;
```

JavaScript can perform mathematical operations.

```javascript
console.log(price + 100);
```

Output

```
600
```

But,

```javascript
let price = "500";

console.log(price + 100);
```

Output

```
500100
```

Reason

The value is a String, so JavaScript joins the values instead of adding them.

---

# 3. Primitive Data Types

JavaScript has 7 Primitive Data Types.

- Number
- String
- Boolean
- undefined
- null
- Symbol
- BigInt

---

# 4. Number

Stores numeric values.

Examples

```javascript
let age = 30;
let price = 499;
let rating = 4.5;
```

Output

```
30
499
4.5
```

JavaScript has only one Number type.

Both integers and decimal numbers are Number.

```javascript
100
4.99
-25
```

---

# 5. String

Stores text values.

Strings are written inside quotes.

Examples

```javascript
let name = "Jayeeta";
let city = "Kolkata";
let brand = 'Plum';
```

Output

```
Jayeeta
Kolkata
Plum
```

---

# 6. Boolean

Stores only two values.

```javascript
true
false
```

Examples

```javascript
let isLoggedIn = true;
let hasCoupon = false;
let inStock = true;
```

Boolean is commonly used for Yes/No or True/False conditions.

---

# 7. undefined

undefined means a variable has been declared but no value has been assigned yet.

Example

```javascript
let username;

console.log(username);
```

Output

```
undefined
```

JavaScript automatically assigns undefined.

Memory

```
username
   ↓
undefined
```

---

# 8. null

null means the programmer intentionally assigns an empty value.

Example

```javascript
let profileImage = null;

console.log(profileImage);
```

Output

```
null
```

Difference

| undefined | null |
|------------|------|
| Assigned automatically by JavaScript | Assigned manually by the developer |
| No value assigned yet | Intentionally empty |

---

# 9. Symbol

A Symbol is a unique primitive value.

Example

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);
```

Output

```
false
```

Every Symbol is unique.

Used to create unique identifiers.

---

# 10. BigInt

BigInt stores very large whole numbers.

Example

```javascript
let transactionId = 12345678901234567890n;

console.log(transactionId);
```

Output

```
12345678901234567890n
```

The `n` at the end tells JavaScript that the value is a BigInt.

Use BigInt when numbers are larger than the safe range of Number.

---

# 11. typeof Operator

The typeof operator returns the data type of a value.

Examples

```javascript
let age = 30;
console.log(typeof age);
```

Output

```
number
```

---

```javascript
let name = "Jayeeta";
console.log(typeof name);
```

Output

```
string
```

---

```javascript
let isLoggedIn = true;
console.log(typeof isLoggedIn);
```

Output

```
boolean
```

---

```javascript
let data;
console.log(typeof data);
```

Output

```
undefined
```

---

```javascript
let id = 12345678901234567890n;
console.log(typeof id);
```

Output

```
bigint
```

---

Important Interview Question

```javascript
let value = null;

console.log(typeof value);
```

Output

```
object
```

Although null is a Primitive Data Type,

```javascript
typeof null
```

returns

```
object
```

This is a historical bug in JavaScript kept for backward compatibility.

---

# 12. Primitive Data Types Summary

| Data Type | Example | typeof Output |
|-----------|---------|---------------|
| Number | 100 | number |
| String | "Hello" | string |
| Boolean | true | boolean |
| undefined | let x; | undefined |
| null | null | object |
| Symbol | Symbol("id") | symbol |
| BigInt | 100n | bigint |

---

# 13. Best Practices

Use the correct data type for the correct value.

Examples

```javascript
const price = 500;
const productName = "Face Wash";
const isLoggedIn = true;
const profileImage = null;
```

---

# 14. Interview Questions

### 1. What is a Data Type?

A Data Type tells JavaScript what kind of value a variable stores.

---

### 2. Why are Data Types important?

They help JavaScript understand how to store and work with values correctly.

---

### 3. What is a Number?

A data type used to store numeric values.

---

### 4. What is a String?

A data type used to store text values.

---

### 5. What is a Boolean?

A data type that stores only two values:

- true
- false

---

### 6. What is undefined?

A variable has been declared but has not been assigned a value.

---

### 7. What is null?

A value intentionally assigned by the programmer to represent "no value".

---

### 8. What is Symbol?

A unique primitive value used to create unique identifiers.

---

### 9. What is BigInt?

A data type used to store very large whole numbers.

---

### 10. What is the typeof operator?

It returns the data type of a value or variable.

---

### 11. What is the output of typeof null?

```javascript
typeof null
```

Output

```
object
```

This is a historical JavaScript bug.

---

# Quick Revision

```
Data Types
│
├── Primitive
│   ├── Number
│   ├── String
│   ├── Boolean
│   ├── undefined
│   ├── null
│   ├── Symbol
│   └── BigInt
│
└── Non-Primitive
    ├── Object
    ├── Array
    └── Function
```

---

# Homework

## Theory

- Revise all 7 Primitive Data Types.
- Revise the difference between undefined and null.
- Revise the typeof operator.

---

## Coding Practice

### Practice 1

Create variables for:

- Store Name
- Product Name
- Price
- Rating
- Is Logged In

Print all values.

---

### Practice 2

Create one variable for each Primitive Data Type.

```javascript
let age = 30;
let name = "Jayeeta";
let isLoggedIn = true;
let city;
let profileImage = null;
let id = Symbol("id");
let bigNumber = 12345678901234567890n;
```

Print the value and its data type using typeof.

---

### Practice 3

Predict the output before running.

```javascript
console.log(typeof 100);

console.log(typeof "100");

console.log(typeof true);

console.log(typeof undefined);

console.log(typeof null);

console.log(typeof Symbol("id"));

console.log(typeof 100n);
```

---

# Day 15 Summary

✅ What is a Data Type

✅ Number

✅ String

✅ Boolean

✅ undefined

✅ null

✅ Symbol

✅ BigInt

✅ typeof Operator

✅ Primitive Data Types

✅ Interview Questions

---

# Next Lesson

## Day 16 - JavaScript Operators

Topics

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Assignment Operators
- Ternary Operator
- Nullish Coalescing (??)
- Optional Chaining (?.)
- Hands-on Coding
- Debugging Exercises
- Interview Questions