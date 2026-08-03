# Day 10 – HTTP Status Codes & REST API Fundamentals

## 🎯 Goal

Understand how a server communicates the result of a request using **HTTP Status Codes** and how **REST APIs** enable communication between the frontend and backend.

> **Key Lesson:** HTTP Methods tell the server **what to do**, while HTTP Status Codes tell the client **what happened** after the request was processed.

---

# 1. What is an HTTP Status Code?

## Definition

An **HTTP Status Code** is a numeric code returned by the server that indicates the result of a client's request.

It helps the browser understand whether the request was:

* Successful
* Failed
* Rejected
* Or if the server encountered an error

---

## Request–Response Example

```text
Browser
    │
POST /login
    ▼
Server
    │
200 OK
    ▼
Browser
```

The browser uses the status code to decide what to do next.

---

# 2. HTTP Status Code Categories

Status codes are grouped into five categories:

| Range | Meaning       |
| ----- | ------------- |
| 1xx   | Informational |
| 2xx   | Success       |
| 3xx   | Redirection   |
| 4xx   | Client Error  |
| 5xx   | Server Error  |

As a Frontend Developer, you'll mostly work with:

* 2xx
* 4xx
* 5xx

---

# 3. Common Success Status Codes

## 200 OK

The request completed successfully.

### Examples

```text
GET /products
```

Returns the product list successfully.

```text
POST /login
```

Login successful.

---

## 201 Created

A new resource has been successfully created.

### Examples

```text
POST /register
```

Creates a new user account.

```text
POST /orders
```

Creates a new order.

---

## 204 No Content

The request succeeded, but the server does not need to return any data.

### Example

```text
DELETE /cart/25
```

The product is removed from the cart.

The frontend only needs confirmation that the deletion succeeded.

---

# 4. Client Error Status Codes

## 400 Bad Request

The client sent an invalid request.

### Example

```text
POST /login
```

Missing email or password.

Server returns:

```text
400 Bad Request
```

---

## 401 Unauthorized

The user is **not authenticated**.

Examples:

* Wrong password
* Invalid token
* Expired session
* User not logged in

The server says:

> Please log in first.

---

## 403 Forbidden

The user is authenticated but does **not have permission** to access the resource.

### Example

A normal customer tries to open:

```text
/admin/dashboard
```

Server returns:

```text
403 Forbidden
```

Meaning:

> I know who you are, but you're not allowed to access this page.

---

## Easy Way to Remember

**401**

❌ Who are you?

**403**

✅ I know you.

❌ But you don't have permission.

---

## 404 Not Found

The requested resource does not exist.

### Examples

```text
GET /products/99999
```

or

```text
shineup.com/random-page
```

The browser shows a **404 Page Not Found**.

---

# 5. Server Error Status Code

## 500 Internal Server Error

The problem is on the server.

Possible reasons:

* Server crashed
* Database unavailable
* Programming error
* Unexpected exception

The frontend cannot fix this issue.

---

# 6. What is a REST API?

## Definition

A **REST API (Representational State Transfer API)** is a collection of endpoints that allows the frontend and backend to communicate using HTTP.

The frontend does **not** communicate directly with the database.

The communication flow is:

```text
Frontend
    ↓
REST API
    ↓
Backend
    ↓
Database
```

The REST API acts as the bridge between the frontend and backend.

---

# 7. REST API Structure

Each REST API consists of:

* URL (Endpoint)
* HTTP Method
* Request
* Response
* Status Code

Example:

```text
GET /products
```

Request:

```text
GET
```

Response:

```text
200 OK
```

Data:

```json
[
  {
    "id": 1,
    "name": "Vitamin C Serum"
  }
]
```

---

# 8. REST API Examples for ShineUp

| Feature              | Endpoint              |
| -------------------- | --------------------- |
| Get Products         | GET /products         |
| Get Product Details  | GET /products/:id     |
| Register             | POST /register        |
| Login                | POST /login           |
| Update Profile       | PATCH /profile        |
| Delete Saved Address | DELETE /addresses/:id |
| Place Order          | POST /orders          |

Notice that REST APIs usually use **nouns** (products, orders, addresses) instead of verbs because the HTTP Method already describes the action.

---

# 9. Complete Request Flow

```text
User
    ↓
Browser
    ↓
DNS Lookup
    ↓
Gets Server IP Address
    ↓
Browser Connects to Server
    ↓
HTTP Request
(GET / POST / PATCH / DELETE)
    ↓
REST API
    ↓
Backend
    ↓
Database
    ↓
Server Response
(Status Code + Data)
    ↓
Browser
    ↓
React / Next.js Updates the UI
```

---

# 10. Startup vs Enterprise

## Startup

* Fewer API endpoints
* Simple error handling
* Basic status code usage

## Enterprise

* Hundreds of REST APIs
* Strict REST conventions
* API versioning
* Authentication
* Authorization
* Monitoring and logging
* Well-documented APIs (Swagger/OpenAPI)

---

# 11. Common Beginner Mistakes

* Treating every error as "Something went wrong."
* Confusing **401** and **403**.
* Assuming every successful response is **200**.
* Thinking the frontend communicates directly with the database.
* Using verbs in REST URLs unnecessarily.

---

# 12. Common Production Mistakes

* Returning incorrect status codes.
* Exposing internal server errors to users.
* Not handling **401** by redirecting users to login.
* Not showing a proper **404** page.
* Ignoring error handling in the frontend.

---

# Interview Questions

## Q1. What is an HTTP Status Code?

An HTTP Status Code is a numeric code returned by the server that indicates the result of a client's request.

---

## Q2. What is the difference between 401 and 403?

**401 Unauthorized**

The user is not authenticated.

**403 Forbidden**

The user is authenticated but does not have permission.

---

## Q3. What is the difference between 200 and 201?

**200 OK**

The request completed successfully.

**201 Created**

A new resource was successfully created.

---

## Q4. When should a server return 404 and 500?

**404**

When the requested resource does not exist.

**500**

When an unexpected server-side error occurs.

---

## Q5. What is a REST API?

A REST API is a set of endpoints that allows the frontend and backend to communicate using HTTP methods such as GET, POST, PUT, PATCH, and DELETE.

---

# Key Definitions

### HTTP Status Code

A numeric response from the server indicating the result of a request.

---

### REST API

A communication interface between the frontend and backend that follows REST principles.

---

### Endpoint

A URL representing a specific resource or action.

Example:

```text
GET /products
```

---

# Things I Learned Today

* HTTP Status Codes indicate the result of a request.
* Success responses commonly use **200**, **201**, and **204**.
* Client errors include **400**, **401**, **403**, and **404**.
* **500** represents a server-side error.
* REST APIs connect the frontend and backend.
* The frontend never communicates directly with the database.
* REST APIs use HTTP Methods, Endpoints, Requests, Responses, and Status Codes together.

---

# Mistakes I Made

* I initially thought a REST API transferred data directly between the frontend and the database. I learned that the API communicates with the backend, which then interacts with the database.
* I learned the important difference between **401 Unauthorized** (not authenticated) and **403 Forbidden** (authenticated but not allowed).
* I also learned that successful requests do not always return **200**; creating a new resource commonly returns **201 Created**, while successful deletions often return **204 No Content**.

---

# Interview Tips

When discussing APIs:

1. Explain what a REST API is.
2. Describe the request flow from the frontend to the backend.
3. Mention the appropriate HTTP Method.
4. Explain the expected Status Code.
5. Describe how the frontend should react to different responses.

---

# Today's Biggest Lesson

> **HTTP Methods describe the action. HTTP Status Codes describe the result. REST APIs combine URLs, Methods, Requests, Responses, and Status Codes to enable communication between the frontend and backend.**
