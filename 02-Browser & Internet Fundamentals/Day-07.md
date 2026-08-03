# Day 07 – DNS, Domain Names & IP Addresses

## 🎯 Goal

Understand how a browser finds the correct server when a user enters a website URL.

> **Key Lesson:** Humans remember **Domain Names**, computers communicate using **IP Addresses**, and **DNS (Domain Name System)** acts as the translator between them.

---

# 1. Why Do We Need DNS?

Yesterday we learned that a browser communicates with a server.

But a question remained:

> **How does the browser know where the server is?**

The browser cannot understand names like:

* google.com
* nykaa.com
* amazon.in
* shineup.com

It needs the server's **IP Address**.

This is where DNS comes in.

---

# 2. What is an IP Address?

## Definition

An **IP Address (Internet Protocol Address)** is a unique numerical address assigned to a device on a network.

It allows computers to identify and communicate with each other over the Internet.

### Examples

```text
142.250.193.78
192.168.1.10
```

Every website server has an IP address.

---

## Real-Life Analogy

Think of your home address.

Example:

```text
House No. 25
Park Street
Kolkata
```

Just as a courier needs your house address to deliver a package, a browser needs a server's IP address to deliver a request.

---

# 3. What is a Domain Name?

## Definition

A **Domain Name** is the human-readable name of a website.

Examples:

* google.com
* amazon.in
* nykaa.com
* shineup.com

A Domain Name is simply an easy-to-remember name that points to a server's IP address.

---

## Real-Life Analogy

In your phone, you save:

```text
Rahul
```

instead of remembering:

```text
+91 9876543210
```

Similarly,

Humans use **Domain Names**, while computers use **IP Addresses**.

---

# 4. What is DNS?

## Definition

**DNS (Domain Name System)** is the Internet's phonebook.

It translates a **Domain Name** into its corresponding **IP Address**, allowing the browser to locate the correct server.

### Example

```text
google.com
      ↓
142.xxx.xxx.xxx
```

Without DNS, browsers would not know where to send requests.

---

# 5. Website Journey with DNS

When a user visits:

```text
https://shineup.com
```

The browser follows this process:

```text
User
   ↓
Browser
   ↓
User enters shineup.com
   ↓
DNS Lookup
   ↓
DNS returns Server IP Address
   ↓
Browser connects to Server
   ↓
Server sends HTML, CSS, JavaScript & Images
   ↓
Browser renders the Website
```

This DNS lookup happens before the browser communicates with the server.

---

# 6. Relationship Between Domain, DNS & IP Address

```text
Human
   │
Types:
shineup.com
   │
   ▼
DNS
   │
Translates
   ▼
IP Address
   │
   ▼
Server
```

Remember:

* Humans understand Domain Names.
* Computers understand IP Addresses.
* DNS connects the two.

---

# 7. Why Don't We Use IP Addresses Directly?

Imagine remembering these:

```text
142.250.193.78
157.240.xxx.xxx
104.xxx.xxx.xxx
```

instead of:

* google.com
* facebook.com
* amazon.in

Domain names make the Internet much easier for humans to use.

---

# 8. How Next.js Fits into This Process

Suppose our Beauty E-commerce project is deployed at:

```text
https://shineup.com
```

The browser still performs the same steps:

```text
Browser
   ↓
DNS
   ↓
Server IP Address
   ↓
Next.js Server
   ↓
Returns HTML, CSS & JavaScript
   ↓
Browser Displays Website
```

Next.js helps generate the application, but it does **not** replace DNS.

---

# 9. What Happens if DNS Stops Working?

If DNS fails:

* Browsers cannot translate domain names into IP addresses.
* Websites cannot be reached using their domain names.
* Some websites may still work temporarily because of DNS cache.
* Direct access using an IP address may work if the server allows it.

DNS is one of the most critical services that keeps the Internet usable.

---

# 10. Startup vs Enterprise

## Startup

* One domain
* One server
* Simple DNS configuration

## Enterprise

* Multiple servers
* Multiple geographic regions
* Global DNS infrastructure
* Load balancing
* CDN integration

Large companies use DNS to direct users to the nearest or healthiest server.

---

# 11. Common Beginner Mistakes

* Thinking DNS stores website files.
* Thinking a Domain Name and IP Address are the same thing.
* Believing the browser connects directly to the server without DNS.
* Thinking DNS is the Internet itself.

---

# 12. Common Production Issues

* Incorrect DNS configuration
* Expired domain names
* Wrong DNS records
* Slow DNS resolution
* Misconfigured production environments

---

# 13. Interview Questions

## Q1. What is an IP Address?

An IP Address is a unique numerical address assigned to a device on a network so it can communicate with other devices.

---

## Q2. What is a Domain Name?

A Domain Name is a human-readable name that maps to a server's IP address.

---

## Q3. What is DNS?

DNS (Domain Name System) translates a Domain Name into an IP Address so the browser can locate the correct server.

---

## Q4. Why do we need DNS?

Humans remember names more easily than numbers. DNS allows users to access websites using readable names instead of IP addresses.

---

## Q5. Can a browser connect to a server using only a Domain Name?

No.

The browser first asks DNS to resolve the Domain Name into an IP Address. It then connects to the server using that IP address.

---

# Key Definitions

### IP Address

A unique numerical address assigned to a device on a network.

---

### Domain Name

A human-readable name used to identify a website.

---

### DNS

A system that converts Domain Names into IP Addresses.

---

# Things I Learned Today

* Every server has an IP Address.
* Humans use Domain Names because they are easier to remember.
* DNS translates Domain Names into IP Addresses.
* Browsers use DNS before communicating with a server.
* DNS is an essential part of every website request.

---

# Mistakes I Made

* I initially thought the browser could directly use a Domain Name to connect to a server.
* I learned that browsers actually require an IP Address, which is obtained through DNS.
* I also learned that DNS only translates names into IP addresses—it does not store website content.

---

# Interview Tips

When explaining DNS in an interview:

1. Define an IP Address.
2. Define a Domain Name.
3. Explain DNS as the translator between them.
4. Describe the browser flow:

   * User enters a URL.
   * Browser performs a DNS lookup.
   * DNS returns the IP Address.
   * Browser connects to the server.
   * Server returns the webpage.
5. Use a real-world analogy, such as a phone contact translating a person's name into their phone number.

---

# Today's Biggest Lesson

> **Servers understand IP Addresses. Humans understand Domain Names. DNS is the translator that connects the two.**

Without DNS, browsing the web using names like **google.com** or **shineup.com** would not be possible.
