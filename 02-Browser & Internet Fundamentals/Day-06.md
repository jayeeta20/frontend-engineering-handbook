# Day 06 – How the Internet Works (Client, Server & Website Journey)

## 🎯 Goal

Understand how a website is delivered from a server to a user's browser and why every frontend developer must know the basics of networking.

> **Key Lesson:** A website does not magically appear in the browser. It is the result of communication between a **Client** and a **Server** over the **Internet**.

---

# 1. What is the Internet?

## Definition

The **Internet** is a global network of interconnected computers that communicate by sending and receiving data.

It allows clients and servers to exchange information such as:

* HTML
* CSS
* JavaScript
* Images
* Videos
* API Data

---

## Simple Analogy

Think of the Internet as a road network.

* Roads → Internet
* Houses → Computers
* Address → IP Address
* Parcel → Data

Without roads, parcels cannot reach their destination.

Similarly, without the Internet, computers cannot exchange data.

---

# 2. What is a Client?

## Definition

A **Client** is a device or application that requests data from a server.

Examples:

* Google Chrome
* Firefox
* Microsoft Edge
* Safari
* Mobile Apps

When you open **Nykaa** in Chrome, Chrome acts as the **Client**.

---

# 3. What is a Server?

## Definition

A **Server** is a computer that stores application resources and responds to requests from clients.

It can send:

* HTML
* CSS
* JavaScript
* Images
* API Responses
* Product Data

Example:

Client:

> "Please give me the homepage."

Server:

> "Here are the HTML, CSS, JavaScript, and images."

---

# 4. Client–Server Communication

Every website follows the same basic communication model.

```text
Client (Browser)
      │
      │ Request
      ▼
Server
      │
      │ Response
      ▼
Client (Browser)
```

The client always **requests**.

The server **processes** the request and **returns a response**.

---

# 5. High-Level Website Journey

When a user opens a website:

```text
User
   ↓
Browser
   ↓
Internet
   ↓
Server
   ↓
Response (HTML, CSS, JS, Images)
   ↓
Browser
   ↓
Website Appears
```

This is the basic flow behind every website.

> **Note:** In the next lesson, we'll add **DNS** between the Browser and Server to understand how the browser finds the correct server.

---

# 6. Example – ShineUp Beauty Platform

Suppose a customer opens:

```text
https://shineup.com
```

The journey is:

1. User enters the URL.
2. Browser sends a request.
3. Request travels through the Internet.
4. Server receives the request.
5. Server returns HTML, CSS, JavaScript, images, and other resources.
6. Browser renders the page.
7. The homepage is displayed.

---

# 7. Why Should Frontend Developers Learn Networking?

Frontend developers need networking knowledge because website performance depends on more than React or Next.js.

Understanding networking helps identify issues like:

* Slow server response
* Large images
* Large JavaScript bundles
* Slow APIs
* Caching problems
* Poor performance

This knowledge makes debugging much easier.

---

# 8. Where Does Next.js Fit?

Next.js helps generate and serve pages, but it still follows the same client–server communication model.

Simplified flow:

```text
User
   ↓
Browser
   ↓
Internet
   ↓
Next.js Server
   ↓
HTML + CSS + JavaScript
   ↓
Browser Renders Website
```

Next.js improves how pages are generated and delivered, but it does not replace the Internet or the server.

---

# 9. Common Reasons a Website Loads Slowly

Possible causes include:

* Heavy images
* Slow server
* Cache issues
* Slow Internet connection
* Large JavaScript bundles
* Too many API requests
* Large CSS files

---

# 10. Startup vs Enterprise

## Startup

* Simpler infrastructure
* Fewer servers
* Basic hosting

## Enterprise

* Multiple servers
* CDNs
* Load balancers
* Monitoring systems
* Advanced caching
* Global infrastructure

---

# 11. Common Beginner Mistakes

* Thinking the browser already contains the website.
* Believing React creates the Internet connection.
* Assuming the server sends only HTML.
* Ignoring network performance.

---

# 12. Common Production Mistakes

* Sending unnecessarily large assets.
* Too many network requests.
* Not optimizing images.
* Poor caching strategy.
* Ignoring server response time.

---

# 13. Interview Questions

## Q1. What is the Internet?

The Internet is a global network of interconnected computers that communicate by sending and receiving data.

---

## Q2. What is the difference between a Client and a Server?

**Client**

Requests data.

Examples:

* Chrome
* Firefox
* Mobile Apps

**Server**

Stores resources and responds to client requests.

---

## Q3. What happens when you open a website?

User → Browser → Internet → Server → Response → Browser → Website Displayed

---

## Q4. Why should a frontend developer understand networking?

Because website performance depends on network communication, server response, resource size, and API requests—not just frontend code.

---

## Q5. Does the browser already contain the website?

No.

The browser sends a request to the server. The server returns the required resources, and the browser renders them into a webpage.

---

# Key Definitions

### Internet

A global network that enables communication between computers.

---

### Client

A device or application that requests data.

---

### Server

A computer that processes requests and returns responses.

---

### Request

A message sent by the client asking for data or resources.

---

### Response

The data returned by the server to the client.

---

# Things I Learned Today

* The Internet connects clients and servers.
* Browsers act as clients.
* Servers store and return website resources.
* Every website follows a request–response model.
* Understanding networking helps debug performance issues.
* Next.js still relies on the same client–server communication process.

---

# Mistakes I Made

* I initially thought the Internet only transfers data from the server to the client, but learned that communication happens in both directions (requests and responses).
* I simplified the website journey and later learned that DNS is another important step before reaching the server.
* I focused mainly on React, but realized website performance also depends on networking and server communication.

---

# Interview Tips

When explaining how a website opens:

1. User enters a URL.
2. Browser sends a request.
3. The request travels through the Internet.
4. The server processes the request.
5. The server returns HTML, CSS, JavaScript, and other resources.
6. The browser renders the page for the user.

Explain the flow step by step instead of jumping directly to "the website opens."

---

# Today's Biggest Lesson

> **Every webpage is the result of communication between a Client and a Server over the Internet.**

Understanding this communication is one of the most important foundations for becoming a strong frontend engineer.
