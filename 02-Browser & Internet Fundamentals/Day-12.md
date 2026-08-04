# Day 12 – JavaScript Engine, Event Loop & Asynchronous JavaScript

## 🎯 Goal

Understand how JavaScript executes code, handles asynchronous tasks, and keeps the browser responsive.

> **Key Lesson:** JavaScript is **single-threaded**, but it can perform asynchronous operations using **Browser Web APIs**, the **Event Loop**, and different task queues.

---

# 1. What is a JavaScript Engine?

A **JavaScript Engine** is a program that reads JavaScript code, converts it into machine code, and executes it.

### Flow

```text
JavaScript Code
        │
        ▼
JavaScript Engine
        │
        ▼
Machine Code
        │
        ▼
CPU Executes
```

### Popular JavaScript Engines

| Browser | JavaScript Engine |
| ------- | ----------------- |
| Chrome  | V8                |
| Edge    | V8                |
| Firefox | SpiderMonkey      |
| Safari  | JavaScriptCore    |

---

# 2. What is V8?

V8 is Google's JavaScript Engine used in Chrome and Edge.

Its job is to:

* Read JavaScript code
* Compile it
* Execute it efficiently

---

# 3. Why is JavaScript Single-Threaded?

JavaScript has **one execution thread**, which means it can execute **one task at a time**.

### Example

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

JavaScript executes the statements one after another.

### Why?

Using a single thread avoids problems like multiple pieces of code updating the same data at the same time (race conditions).

---

# 4. What is the Call Stack?

The **Call Stack** is JavaScript's working area where functions are executed.

It follows the **LIFO (Last In, First Out)** principle.

### Example

```javascript
function login() {
  console.log("Login");
}

function home() {
  login();
}

home();
```

Execution:

```text
Call Stack

home()
↓

login()
↓

console.log()

↓

console.log finishes

↓

login finishes

↓

home finishes

↓

Stack Empty
```

---

# 5. Stack Overflow

If a function keeps calling itself forever, the Call Stack keeps growing until it reaches its limit.

Example:

```javascript
function test() {
  test();
}

test();
```

Error:

```text
RangeError:
Maximum call stack size exceeded
```

---

# 6. What are Web APIs?

Web APIs are **browser-provided features** that perform asynchronous or time-consuming tasks for JavaScript.

Examples:

* setTimeout()
* fetch()
* addEventListener()
* localStorage
* geolocation

JavaScript hands these tasks to the browser and continues executing other code.

---

# 7. What is the Callback Queue?

The **Callback Queue** is a waiting area where completed Web API tasks stay until the Call Stack becomes empty.

Example:

```javascript
setTimeout(() => {
  console.log("Done");
}, 3000);
```

After the timer finishes, the callback waits in the Callback Queue.

---

# 8. What is the Event Loop?

The **Event Loop** continuously checks:

1. Is the Call Stack empty?
2. If yes, move the next task from the queue to the Call Stack.

### Flow

```text
Call Stack
     ▲
     │
Event Loop
     │
     ▼
Callback Queue
```

---

# 9. Why Doesn't `setTimeout(..., 0)` Execute Immediately?

Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");
```

Output:

```text
Start
End
Timer
```

### Why?

* `setTimeout()` is handled by the Browser Web API.
* JavaScript continues executing the remaining synchronous code.
* After the timer finishes, its callback is added to the Callback Queue.
* The Event Loop moves it to the Call Stack only after the Call Stack becomes empty.

---

# 10. Microtasks vs. Macrotasks

JavaScript has two asynchronous task queues.

| Microtask Queue  | Macrotask Queue    |
| ---------------- | ------------------ |
| High Priority    | Normal Priority    |
| Promise.then()   | setTimeout()       |
| catch()          | setInterval()      |
| finally()        | addEventListener() |
| queueMicrotask() | DOM events         |

### Rule

When the Call Stack becomes empty:

1. Execute **all Microtasks**.
2. Execute **one Macrotask**.
3. Repeat.

---

# 11. Example

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Explanation:

1. Print `A`
2. Send `setTimeout()` to the Browser Web API
3. Add `Promise.then()` to the Microtask Queue
4. Print `D`
5. Execute all Microtasks (`C`)
6. Execute the Macrotask (`B`)

---

# 12. Complete Execution Flow

```text
JavaScript Code
        │
        ▼
JavaScript Engine (V8)
        │
        ▼
Call Stack
        │
        ▼
Browser Web APIs
        │
        ├───────────────┐
        ▼               ▼
Microtask Queue    Macrotask Queue
(Promise.then)     (setTimeout)
        │               │
        └──────┬────────┘
               ▼
          Event Loop
               │
               ▼
          Call Stack
```

---

# 13. Common Beginner Mistakes

* Thinking JavaScript runs multiple functions at the same time.
* Thinking `setTimeout()` pauses JavaScript.
* Believing `setTimeout(..., 0)` executes immediately.
* Confusing the Call Stack with the JavaScript thread.
* Thinking Web APIs are part of JavaScript (they are provided by the browser).

---

# 14. Performance Tips

* Avoid long-running synchronous code because it blocks the Call Stack.
* Use asynchronous APIs for network requests and timers.
* Keep heavy computations off the main thread when possible.

---

# Interview Questions

### What is a JavaScript Engine?

A program that reads, compiles, and executes JavaScript code.

---

### What is V8?

Google's JavaScript Engine used by Chrome and Edge.

---

### Why is JavaScript single-threaded?

It has one execution thread, so it executes one task at a time and avoids race conditions.

---

### What is the Call Stack?

JavaScript's working area where functions are executed one at a time using the LIFO principle.

---

### What are Web APIs?

Browser-provided features that perform asynchronous tasks such as timers, API requests, and event handling.

---

### What is the Callback Queue?

A waiting area where completed asynchronous tasks stay until the Call Stack is empty.

---

### What is the Event Loop?

A mechanism that moves tasks from the queue to the Call Stack when the Call Stack becomes empty.

---

### Why doesn't `setTimeout(..., 0)` execute immediately?

Because its callback is added to the Macrotask Queue and can only execute after the Call Stack is empty.

---

### Why does `Promise.then()` execute before `setTimeout()`?

Because `Promise.then()` uses the **Microtask Queue**, which has higher priority than the **Macrotask Queue**.

---

# Key Definitions

### JavaScript Engine

Executes JavaScript code.

### V8

Chrome's JavaScript Engine.

### Call Stack

JavaScript's working area where functions execute one at a time.

### Web APIs

Browser-provided helpers for asynchronous tasks.

### Callback Queue (Macrotask Queue)

Stores completed asynchronous callbacks waiting to execute.

### Microtask Queue

Stores high-priority asynchronous tasks such as Promise callbacks.

### Event Loop

Moves queued tasks to the Call Stack when it becomes empty.

---

# Things I Learned Today

* JavaScript is single-threaded.
* The Call Stack executes one function at a time.
* Web APIs handle asynchronous operations.
* The Callback Queue stores completed asynchronous callbacks.
* The Event Loop moves tasks back to the Call Stack.
* `setTimeout(..., 0)` does not execute immediately.
* Microtasks have higher priority than Macrotasks.
* `Promise.then()` executes before `setTimeout()`.

---

# Mistakes I Made

* I initially thought the Call Stack was the JavaScript thread. I learned that the thread executes code, while the Call Stack tracks function execution.
* I thought Web APIs were part of JavaScript. I learned they are provided by the browser.
* I learned that `0 ms` in `setTimeout()` means "no waiting before entering the queue," not "execute immediately."

---

# Easy Memory Tricks

👨‍💻 **JavaScript** = Chef

🍳 **Web APIs** = Kitchen Helpers

🪑 **Callback Queue** = Waiting Room

⭐ **Microtask Queue** = VIP Waiting Room

👨‍💼 **Event Loop** = Restaurant Manager

🧑‍🍳 **Call Stack** = Chef's Working Table

---

# Today's Biggest Lesson

> **JavaScript can execute only one task at a time, but Browser Web APIs, the Event Loop, and task queues allow asynchronous operations to run without blocking the user interface.**
