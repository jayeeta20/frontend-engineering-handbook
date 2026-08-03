# Day 09 – HTTP Methods & HTTP Status Codes (Part 1)

## 🎯 Goal

Understand how browsers tell servers **what action to perform** using **HTTP Methods**, and how servers communicate the **result of that action** using **HTTP Status Codes**.

> **Key Lesson:** **HTTP Methods describe what the client wants to do. HTTP Status Codes describe what happened after the server processed the request.**

---

# 1. Why Do We Need HTTP Methods?

When a browser communicates with a server, every request has a different purpose.

Examples:

* View products
* Register a new user
* Login
* Update profile
* Delete an address

Using the same request type for every action would create confusion.

HTTP Methods solve this by clearly describing the action the client wants to perform.

---

# 2. What is an HTTP Method?

## Definition

An **HTTP Method** tells the server what operation the client wants to perform on a resource.

Examples:

* Read data
* Create data
* Update data
* Delete data

---

# 3. The Five Most Common HTTP Methods

| Method | Purpose                                 |
| ------ | --------------------------------------- |
| GET    | Retrieve (Read) data                    |
| POST   | Create new data                         |
| PUT    | Replace an existing resource completely |
| PATCH  | Update part of an existing resource     |
| DELETE | Remove data                             |

---

# 4. GET Method

## Definition

GET is used to **retrieve data** from the server.

It **does not modify** any data.

### Beauty E-commerce Examples

```text id="2ptvwb"
GET /products
```

Returns all beauty products.

```text id="m97xbh"
GET /categories
```

Returns product categories.

```text id="3cw6ld"
GET /profile
```

Returns the logged-in user's profile.

### Important

GET is only used to **read data**.

---

# 5. POST Method

## Definition

POST is used to **create new data** or send information that the server needs to process.

### Examples

```text id="znfyl0"
POST /register
```

Creates a new user account.

```text id="if55dg"
POST /login
```

Sends email and password for authentication.

```text id="ry5g1z"
POST /orders
```

Creates a new order.

```text id="0y8qeh"
POST /reviews
```

Creates a new product review.

### Important

Login generally uses **POST**, not GET, because sensitive information such as passwords is sent in the request body.

---

# 6. PUT Method

## Definition

PUT replaces an existing resource completely.

### Example

Old Profile

```text id="ly1k5k"
Name: Jayeeta
Phone: 9999999999
City: Kolkata
```

Request

```text id="w5wn5l"
PUT /profile
```

New Data

```text id="v1cxdt"
Name: Jayeeta Das
Phone: 8888888888
City: Kolkata
```

The previous profile is completely replaced.

---

# 7. PATCH Method

## Definition

PATCH updates only the fields that have changed.

### Example

```text id="ku2tlt"
PATCH /profile
```

```text id="t1uhye"
Phone: 8888888888
```

Only the phone number changes.

Everything else remains the same.

---

# PUT vs PATCH

| PUT                          | PATCH                        |
| ---------------------------- | ---------------------------- |
| Replaces the entire resource | Updates only specific fields |
| Sends the complete object    | Sends only changed fields    |

---

# 8. DELETE Method

## Definition

DELETE removes existing data.

### Examples

```text id="nwmg6k"
DELETE /cart/12
```

Removes a product from the cart.

```text id="6x79nn"
DELETE /address/5
```

Deletes a saved address.

```text id="t9gxhn"
DELETE /review/8
```

Deletes a review.

---

# 9. Beauty E-commerce Examples

| Feature                 | HTTP Method |
| ----------------------- | ----------- |
| View Homepage           | GET         |
| View Products           | GET         |
| View Product Details    | GET         |
| Register                | POST        |
| Login                   | POST        |
| Place Order             | POST        |
| Update Phone Number     | PATCH       |
| Update Complete Profile | PUT         |
| Delete Saved Address    | DELETE      |
| Delete Product Review   | DELETE      |

---

# 10. What are HTTP Status Codes?

## Definition

An **HTTP Status Code** is a number returned by the server to indicate the result of a request.

It tells the browser whether the request:

* Succeeded
* Failed
* Requires another action

---

# Common HTTP Status Codes

| Code | Meaning                 |
| ---: | ----------------------- |
|  200 | OK (Request Successful) |
|  201 | Created                 |
|  400 | Bad Request             |
|  401 | Unauthorized            |
|  403 | Forbidden               |
|  404 | Not Found               |
|  500 | Internal Server Error   |

We'll study each of these in detail in the next lesson.

---

# 11. Example Request–Response Flow

Customer logs into ShineUp.

```text id="3hf4g9"
Browser
      │
POST /login
      ▼
Server
      │
200 OK
      ▼
Browser
      │
Homepage Appears
```

If the password is incorrect:

```text id="a9m22v"
POST /login
      │
      ▼
Server
      │
401 Unauthorized
      ▼
Browser
      │
Shows Login Error
```

---

# 12. Startup vs Enterprise

## Startup

* APIs may not always follow REST conventions perfectly.
* Smaller projects sometimes use POST for many actions.

## Enterprise

* Teams consistently use the correct HTTP methods.
* APIs follow REST standards.
* Proper status codes are returned for every request.

---

# 13. Common Beginner Mistakes

* Using POST for every request.
* Thinking GET should modify data.
* Confusing PUT and PATCH.
* Ignoring HTTP Status Codes.

---

# 14. Common Production Mistakes

* Returning incorrect status codes.
* Deleting data using GET requests.
* Updating resources with the wrong HTTP method.
* Not handling failed responses on the frontend.

---

# Interview Questions

## Q1. What is an HTTP Method?

An HTTP Method tells the server what action the client wants to perform on a resource.

---

## Q2. What is the difference between GET and POST?

GET retrieves data without changing it.

POST creates new data or sends information to the server for processing.

---

## Q3. What is the difference between PUT and PATCH?

PUT replaces an entire resource.

PATCH updates only specific fields of a resource.

---

## Q4. Which HTTP Method would you use?

| Action               | Method |
| -------------------- | ------ |
| View Products        | GET    |
| Register User        | POST   |
| Login                | POST   |
| Update Phone Number  | PATCH  |
| Replace Full Profile | PUT    |
| Delete Address       | DELETE |
| Place Order          | POST   |

---

## Q5. Why are HTTP Status Codes important?

HTTP Status Codes tell the client whether a request was successful, failed, or requires another action.

---

# Key Definitions

### HTTP Method

Defines the action the client wants to perform.

---

### GET

Retrieves data.

---

### POST

Creates new data or sends data for processing.

---

### PUT

Replaces an existing resource completely.

---

### PATCH

Updates only changed fields.

---

### DELETE

Removes existing data.

---

### HTTP Status Code

A numeric response sent by the server describing the outcome of the request.

---

# Things I Learned Today

* HTTP Methods define the purpose of a request.
* GET is used for reading data.
* POST is used to create data or send credentials.
* PUT replaces an entire resource.
* PATCH updates only changed fields.
* DELETE removes data.
* HTTP Status Codes tell the browser whether a request succeeded or failed.

---

# Mistakes I Made

* I initially thought Login should use GET, but learned it should use POST because credentials are sent to the server securely in the request body.
* I also learned that GET does not necessarily return "all" data—it simply retrieves the requested data without modifying it.
* I refined my understanding that Status Codes describe the result of a request, not the HTTP method itself.

---

# Interview Tips

When discussing APIs in an interview:

1. Explain the purpose of HTTP Methods.
2. Give real-world examples (login, product list, profile update).
3. Clearly distinguish PUT and PATCH.
4. Mention that Login usually uses POST.
5. Explain that Status Codes communicate the result of the request.

---

# Today's Biggest Lesson

> **HTTP Methods tell the server what the client wants to do. HTTP Status Codes tell the client what happened after the server processed the request.**

Understanding both is essential for working with APIs in React, Next.js, and enterprise frontend applications.
