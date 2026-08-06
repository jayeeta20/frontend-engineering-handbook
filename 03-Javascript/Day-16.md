# 📅 Day 16 – JavaScript Operators

---

# 🎯 What are Operators?

Operators are symbols that perform operations on values or variables.

Example:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

Output:

```
15
```

---

# 1. Arithmetic Operators

Used for mathematical calculations.

| Operator | Meaning             | Example     |
| -------- | ------------------- | ----------- |
| +        | Addition            | 10 + 5 = 15 |
| -        | Subtraction         | 10 - 5 = 5  |
| *        | Multiplication      | 10 * 5 = 50 |
| /        | Division            | 10 / 5 = 2  |
| %        | Modulus (Remainder) | 10 % 3 = 1  |
| **       | Exponent (Power)    | 2 ** 3 = 8  |

Example:

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(2 ** 3);
```

---

# 2. Assignment Operators

Used to assign or update values.

| Operator | Meaning             |
| -------- | ------------------- |
| =        | Assign value        |
| +=       | Add and assign      |
| -=       | Subtract and assign |
| *=       | Multiply and assign |
| /=       | Divide and assign   |
| %=       | Modulus and assign  |

Example:

```javascript
let wallet = 1000;

wallet += 500;
console.log(wallet);

wallet -= 200;
console.log(wallet);

wallet *= 2;
console.log(wallet);

wallet /= 2;
console.log(wallet);

wallet %= 300;
console.log(wallet);
```

---

# 3. Comparison Operators

Used to compare two values.

Always returns:

* true
* false

| Operator | Meaning                                 |
| -------- | --------------------------------------- |
| ==       | Equal (checks value only)               |
| ===      | Strict Equal (checks value + data type) |
| !=       | Not Equal                               |
| !==      | Strict Not Equal                        |
| >        | Greater Than                            |
| <        | Less Than                               |
| >=       | Greater Than or Equal                   |
| <=       | Less Than or Equal                      |

Example:

```javascript
console.log(5 == "5");
console.log(5 === "5");
console.log(10 > 5);
console.log(10 <= 5);
```

Output:

```
true
false
true
false
```

---

# Difference Between == and ===

```javascript
console.log(5 == "5");
```

Output:

```
true
```

Reason:
Only checks the value.

---

```javascript
console.log(5 === "5");
```

Output:

```
false
```

Reason:
Checks both the value and the data type.

---

# 4. Logical Operators

Used to combine multiple conditions.

## AND (&&)

Returns true only when both conditions are true.

```javascript
let isLoggedIn = true;
let isPremium = true;

console.log(isLoggedIn && isPremium);
```

Output:

```
true
```

Truth Table

```
true && true = true
true && false = false
false && true = false
false && false = false
```

---

## OR (||)

Returns true if at least one condition is true.

```javascript
let hasCoupon = false;
let isPremium = true;

console.log(hasCoupon || isPremium);
```

Output:

```
true
```

Truth Table

```
true || true = true
true || false = true
false || true = true
false || false = false
```

---

## NOT (!)

Reverses the Boolean value.

```javascript
let isLoggedIn = true;

console.log(!isLoggedIn);
```

Output:

```
false
```

---

# 5. Ternary Operator

Short form of if...else.

Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
let age = 20;

console.log(age >= 18 ? "Adult" : "Minor");
```

Output

```
Adult
```

Another Example

```javascript
let stock = 0;

let status = stock > 0 ? "In Stock" : "Out of Stock";

console.log(status);
```

---

# 6. Nullish Coalescing Operator (??)

Returns the right-side value only when the left-side value is:

* null
* undefined

Syntax

```javascript
value ?? defaultValue
```

Example

```javascript
let userName = null;

console.log(userName ?? "Guest");
```

Output

```
Guest
```

Example

```javascript
let quantity = 0;

console.log(quantity ?? 10);
```

Output

```
0
```

Remember:

`??` does NOT replace:

* 0
* false
* ""

It only replaces:

* null
* undefined

---

# 7. Optional Chaining (?.)

Safely accesses nested object properties.

Without Optional Chaining

```javascript
let user = {
    name: "Jayeeta"
};

console.log(user.address.city);
```

Output

```
TypeError
```

Because address does not exist.

---

With Optional Chaining

```javascript
let user = {
    name: "Jayeeta"
};

console.log(user.address?.city);
```

Output

```
undefined
```

No error occurs.

---

# 8. Increment Operator (++)

Increases the value by 1.

Example

```javascript
let count = 5;

count++;

console.log(count);
```

Output

```
6
```

---

# 9. Decrement Operator (--)

Decreases the value by 1.

Example

```javascript
let stock = 10;

stock--;

console.log(stock);
```

Output

```
9
```

---

# Prefix vs Postfix

## Postfix (x++)

Use first, then increase.

```javascript
let x = 5;

console.log(x++);
console.log(x);
```

Output

```
5
6
```

---

## Prefix (++x)

Increase first, then use.

```javascript
let x = 5;

console.log(++x);
console.log(x);
```

Output

```
6
6
```

---

## Postfix Decrement (x--)

```javascript
let x = 5;

console.log(x--);
console.log(x);
```

Output

```
5
4
```

---

## Prefix Decrement (--x)

```javascript
let x = 5;

console.log(--x);
console.log(x);
```

Output

```
4
4
```

---

# 🛒 Real-World Examples

### Shopping Cart Quantity

```javascript
let quantity = 1;

quantity++;

console.log(quantity);
```

Output

```
2
```

---

### Product Availability

```javascript
let stock = 0;

let status = stock > 0 ? "Available" : "Sold Out";

console.log(status);
```

Output

```
Sold Out
```

---

### Default User Name

```javascript
let userName = null;

console.log(userName ?? "Guest");
```

Output

```
Guest
```

---

### Safe API Response

```javascript
let product = {
    name: "Face Wash"
};

console.log(product.review?.rating);
```

Output

```
undefined
```

---

# ⭐ Easy Tricks to Remember

### == vs ===

* `==` → Compare value only
* `===` → Compare value + data type

---

### &&

Both conditions must be true.

---

### ||

At least one condition must be true.

---

### !

Reverse the Boolean value.

---

### ??

Use default value only if the value is `null` or `undefined`.

---

### ?.

Safely access nested object properties.

---

### x++

Use first, then increase.

---

### ++x

Increase first, then use.

---

# 🎯 Day 16 Summary

Today you learned:

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Ternary Operator
* Nullish Coalescing (`??`)
* Optional Chaining (`?.`)
* Increment (`++`)
* Decrement (`--`)
* Prefix vs Postfix

---

# 📊 Progress

✅ Module 1 – Software Engineering Fundamentals (Completed)

🟡 Module 2 – Browser & Internet Fundamentals (90% Completed)

🟡 Module 3 – JavaScript Fundamentals

* ✅ Day 14 – Variables
* ✅ Day 15 – Data Types
* ✅ Day 16 – Operators
* ⏳ Day 17 – Conditional Statements
