# Day 14 - JavaScript Variables, Memory & Scope

## Module 4 - JavaScript Fundamentals

---

# Learning Objectives

By the end of Day 14, I learned:

- What is a Variable
- Why Variables are needed
- Primitive vs Reference Values
- Objects in JavaScript
- let
- const
- var
- Reassignment
- Redeclaration
- Global Scope
- Function Scope
- Block Scope
- Variable Shadowing

---

# 1. What is a Variable?

A variable is a named container that stores data in memory so it can be used later in the program.

Example

```javascript
let name = "Jayeeta";
```

Variable Name → name

Value → "Jayeeta"

---

# 2. Why do we need Variables?

Variables help us to:

- Store data
- Reuse data
- Update data
- Make code readable

Example

```javascript
let cartTotal = 500;

console.log(cartTotal);
```

---

# 3. Variable Declaration

## let

Use let when the value can change later.

```javascript
let city = "Kolkata";

city = "Delhi";
```

Allowed ✅

---

## const

Use const when the variable should never be reassigned.

```javascript
const PI = 3.14;
```

Trying to change it

```javascript
PI = 4;
```

Error ❌

---

## var

Old way of creating variables.

```javascript
var age = 30;
```

Modern JavaScript projects avoid using var.

---

# 4. Reassignment

Changing the value of an existing variable.

Example

```javascript
let price = 100;

price = 200;
```

Allowed ✅

---

# 5. Redeclaration

Creating another variable with the same name in the same scope.

```javascript
let city = "Kolkata";

let city = "Delhi";
```

Error ❌

---

# Difference

## Reassignment

```javascript
let x = 10;

x = 20;
```

Allowed ✅

---

## Redeclaration

```javascript
let x = 10;

let x = 20;
```

Error ❌

---

# 6. Primitive Values

Primitive values are copied by VALUE.

Examples

- Number
- String
- Boolean
- null
- undefined
- Symbol
- BigInt

Example

```javascript
let a = 10;

let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output

```
10
20
```

Memory

```
a ----> 10

b ----> 20
```

Changing b does NOT change a.

---

# 7. Reference Values

Objects and Arrays are copied by REFERENCE.

Example

```javascript
let person = {
    name: "Jayeeta"
};

let user = person;

user.name = "Priya";

console.log(person.name);
console.log(user.name);
```

Output

```
Priya
Priya
```

Memory

```
person -----\
              \
               ---> Object
                    name: "Priya"
              /
user --------/
```

Both variables point to the SAME object.

---

# 8. Objects

Create Object

```javascript
let person = {
    name: "Jayeeta",
    age: 30,
    city: "Kolkata"
};
```

Read Property

```javascript
console.log(person.name);
```

Update Property

```javascript
person.city = "Delhi";
```

Add Property

```javascript
person.email = "jayeeta@example.com";
```

---

# 9. const with Objects

```javascript
const person = {
    name: "Jayeeta"
};

person.name = "Priya";

console.log(person.name);
```

Output

```
Priya
```

Allowed ✅

Reason

const prevents changing the variable reference, not the object's properties.

---

Not Allowed

```javascript
const person = {
    name: "Jayeeta"
};

person = {
    name: "Priya"
};
```

Error ❌

Because we are assigning a completely new object.

---

# 10. const with Arrays

```javascript
const numbers = [1,2,3];

numbers.push(4);

console.log(numbers);
```

Output

```
[1,2,3,4]
```

Allowed ✅

Because push() modifies the existing array.

---

Not Allowed

```javascript
numbers = [1,2,3,4];
```

Error ❌

---

# 11. Scope

Scope defines where a variable can be accessed.

There are three types of scope:

- Global Scope
- Function Scope
- Block Scope

---

# Global Scope

Variables declared outside every function.

Example

```javascript
let website = "ShineUp";

function showWebsite() {
    console.log(website);
}

showWebsite();
```

Output

```
ShineUp
```

Global variables can be accessed almost everywhere.

---

# Function Scope

Variables declared inside a function.

Example

```javascript
function login(){

    let password = "1234";

    console.log(password);

}

login();
```

Trying to access outside

```javascript
console.log(password);
```

Error ❌

Reason

password only exists inside the function.

---

# Block Scope

Anything inside

```javascript
{

}
```

is called a block.

Example

```javascript
if(true){

    let price = 100;

}

console.log(price);
```

Output

```
Error
```

Reason

let and const are Block Scoped.

---

# var Scope

```javascript
if(true){

    var total = 500;

}

console.log(total);
```

Output

```
500
```

Reason

var ignores block scope.

This is one reason modern JavaScript prefers let and const.

---

# Variable Shadowing

```javascript
let a = 10;

{

    let a = 20;

    console.log(a);

}

console.log(a);
```

Output

```
20
10
```

The inner variable temporarily hides the outer variable.

---

# var vs let vs const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Redeclare | ✅ | ❌ | ❌ |
| Reassign | ✅ | ✅ | ❌ |
| Block Scope | ❌ | ✅ | ✅ |
| Function Scope | ✅ | ❌ | ❌ |
| Modern Projects | ❌ Avoid | ✅ Yes | ✅ Default |

---

# Best Practices

Use const by default.

```javascript
const API_URL = "...";
const products = [];
const user = {};
```

Use let when the value changes.

```javascript
let total = 0;

total += 500;
```

Avoid var in modern JavaScript.

---

# Interview Questions

### 1. What is a Variable?

A named container used to store data in memory.

---

### 2. What is Reassignment?

Changing the value of an existing variable.

---

### 3. What is Redeclaration?

Creating another variable with the same name in the same scope.

---

### 4. Primitive vs Reference Values

Primitive values are copied by value.

Objects and Arrays are copied by reference.

---

### 5. Why can a const Object be modified?

Because const only prevents changing the variable reference.

It does not prevent changing the object's properties.

---

### 6. What are the three types of Scope?

- Global Scope
- Function Scope
- Block Scope

---

### 7. Why is let preferred over var?

Because let is Block Scoped and prevents many bugs caused by var.

---

### 8. Which keyword should be used in React or Next.js projects?

Default → const

If value changes → let

Avoid → var

---

# Quick Revision

Variables
↓
Store Data

Primitive
↓
Copy by Value

Objects / Arrays
↓
Copy by Reference

let
↓
Reassign ✅
Redeclare ❌

const
↓
Reassign ❌
Modify Object Properties ✅

var
↓
Old JavaScript
Avoid in Modern Projects

Scope
↓
Global
Function
Block

Shadowing
↓
Inner variable temporarily hides outer variable

---

# Homework

## Theory

- Revise Primitive vs Reference.
- Revise var vs let vs const.
- Explain Scope in your own words.

## Coding Practice

1. Create an Object.
2. Read Properties.
3. Update Properties.
4. Add New Properties.
5. Create an Array using const.
6. Add new values using push().
7. Write one example each for:
   - Global Scope
   - Function Scope
   - Block Scope

---

# Day 14 Summary

✅ Variables

✅ Primitive Values

✅ Reference Values

✅ Objects

✅ Arrays

✅ let

✅ const

✅ var

✅ Reassignment

✅ Redeclaration

✅ Global Scope

✅ Function Scope

✅ Block Scope

✅ Variable Shadowing

✅ var vs let vs const

---

# Next Lesson

Day 15 - JavaScript Data Types

- Number
- String
- Boolean
- null
- undefined
- Symbol
- BigInt
- typeof Operator
- Hands-on Coding Practice
- Interview Questions