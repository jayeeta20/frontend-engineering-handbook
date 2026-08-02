# Day 02 – Requirement Analysis

## 🎯 Goal

Understand how software companies convert a business idea into clear, testable requirements before development begins.

> **Key Lesson:** Good software starts with good requirements, not good code.

---

# 1. What is a Requirement?

A **Requirement** is a documented need or expectation that describes **what the system should do** or **how it should behave**.

Requirements act as an agreement between:

* Business Team
* Product Manager
* UI/UX Designer
* Developers
* QA Engineers

Without proper requirements:

* Developers make assumptions.
* Features are misunderstood.
* More bugs occur.
* Rework increases.
* Project deadlines are delayed.

---

# 2. Types of Requirements

```text
Requirements
│
├── Functional Requirements (FR)
│
└── Non-Functional Requirements (NFR)
```

---

# 3. Functional Requirements (FR)

## Definition

Functional Requirements describe **what the application should do**.

They define the **features** or **capabilities** of the system.

### Formula

> **Who + Action + Expected Result**

Example:

> A registered user can log in using a valid email address and password.

---

## Examples

* User Registration
* Login
* Forgot Password
* Product Search
* Product Details
* Add to Cart
* Wishlist
* Checkout
* Payment
* Order History
* Product Reviews

---

## Characteristics of a Good Functional Requirement

A good Functional Requirement should answer:

### Who?

Guest User

Registered User

Admin

---

### What?

Login

Search

Checkout

Review Product

---

### When?

During Checkout

After Login

When clicking "Add to Cart"

---

### Expected Result?

Redirect to Checkout

Display Error Message

Show Login Popup

---

# 4. Non-Functional Requirements (NFR)

## Definition

Non-Functional Requirements describe **how well the application should perform**.

They define the **quality attributes** of the system.

Examples of quality attributes:

* Performance
* Security
* Accessibility
* Scalability
* Reliability
* SEO
* Responsiveness
* Browser Compatibility

---

## Formula

> The application should...

Example:

> The application should load each page within 2 seconds.

---

# 5. Functional vs Non-Functional Requirements

| Functional Requirement        | Non-Functional Requirement                 |
| ----------------------------- | ------------------------------------------ |
| User can login                | Login should complete within 2 seconds     |
| User can search products      | Search results should appear within 500 ms |
| User can checkout             | Checkout should use HTTPS encryption       |
| User can upload profile image | Upload should support files up to 5 MB     |

---

# 6. Good Requirement vs Bad Requirement

## ❌ Bad Requirement

> User can login.

Problems:

* Doesn't explain how.
* Doesn't define expected behavior.
* Difficult to test.

---

## ✅ Better Requirement

> A registered user can log in using a valid email address and password.

---

## ⭐ Best Requirement

> A registered user can log in using a valid email address and password. If the credentials are invalid, the system should display an appropriate error message without revealing whether the email address exists.

This requirement is:

* Clear
* Secure
* Specific
* Testable

---

# 7. Functional Requirements for Our Beauty E-commerce Platform

### FR-1

A guest user can browse all products without logging in.

---

### FR-2

A guest user attempting to add a product to the cart should see a login prompt with options to log in, register, or continue browsing. After successful login, the user should return to the same product page.

---

### FR-3

A guest user can create a new customer account by completing the registration process.

---

### FR-4

A registered user can log in using a valid email address and password.

---

### FR-5

A registered user can reset their password using the "Forgot Password" process.

---

### FR-6

A registered user can add available products with the selected variant (size, color, etc.) and quantity to their shopping cart.

---

### FR-7

A registered user can view their shopping cart and proceed to checkout by providing the required order information.

---

### FR-8

A registered user can add and manage separate billing and shipping addresses during checkout.

---

### FR-9

A registered user can choose from the available payment methods before placing an order.

---

### FR-10

A registered user can view their order history and the details of each order after it has been placed.

---

# 8. Non-Functional Requirements for Our Beauty E-commerce Platform

### NFR-1

The application should provide a consistent and intuitive user interface.

---

### NFR-2

The application should load each page within **2 seconds** under normal network conditions.

---

### NFR-3

The application should follow SEO best practices so that search engines can crawl and index public pages.

---

### NFR-4

The application should display a user-friendly error page for invalid routes.

---

### NFR-5

The application should display a loading indicator or skeleton screen while data is being fetched.

---

### NFR-6

The application should be fully responsive across mobile, tablet, laptop, and desktop devices.

---

### NFR-7

The application should comply with accessibility best practices, including keyboard navigation, screen reader support, and sufficient color contrast.

---

### NFR-8

The application should use secure HTTPS connections for all pages and API requests.

---

### NFR-9

The application should support modern browsers such as Chrome, Edge, Firefox, and Safari.

---

### NFR-10

The application should be designed to handle increased traffic without significant performance degradation.

---

# 9. Common Beginner Mistakes

* Writing page names instead of user behavior.
* Forgetting to mention the user role.
* Writing vague requirements.
* Confusing Functional and Non-Functional Requirements.
* Assuming business rules instead of documenting them.

---

# 10. Common Production Mistakes

* Requirements are ambiguous.
* Edge cases are ignored.
* Accessibility is forgotten.
* Security requirements are added too late.
* Requirements are not testable.

---

# 11. Real-World Examples

## Functional Requirement

> A registered user can add products to their shopping cart.

This defines a **feature**.

---

## Non-Functional Requirement

> The shopping cart should update within one second after adding a product.

This defines the **quality** of the feature.

---

# 12. Interview Questions

## Q1. What is a Requirement?

A Requirement is a documented need describing what a system should do or how it should behave.

---

## Q2. What is a Functional Requirement?

A Functional Requirement defines a feature or capability that users or administrators can perform.

---

## Q3. What is a Non-Functional Requirement?

A Non-Functional Requirement defines the quality attributes of the system, such as performance, security, accessibility, reliability, scalability, and usability.

---

## Q4. Is Dark Mode a Functional Requirement?

Yes.

Dark Mode introduces a new capability to the application, making it a Functional Requirement.

---

## Q5. Is "The homepage should load within 2 seconds" a Functional Requirement?

No.

It is a Non-Functional Requirement because it describes a performance expectation.

---

## Q6. Why are Requirements important?

Requirements reduce misunderstandings between stakeholders, developers, and testers, making the software easier to build, test, and maintain.

---

# Key Definitions

### Requirement

A documented expectation describing what the system should do or how it should behave.

---

### Functional Requirement (FR)

Defines the features and capabilities of the application.

---

### Non-Functional Requirement (NFR)

Defines how well the application should perform and the quality standards it should meet.

---

# Things I Learned Today

* Functional Requirements describe **what** the system should do.
* Non-Functional Requirements describe **how well** the system should perform.
* Every good Functional Requirement should clearly define the actor, action, and expected behavior.
* Good requirements are specific, testable, and unambiguous.
* Requirement analysis is the foundation of good software engineering.

---

# Mistakes I Made

* I initially thought Dark Mode was a Non-Functional Requirement.
* I confused Forgot Password and Product Recommendation with Non-Functional Requirements.
* I learned that Non-Functional Requirements are **not small features**; they describe quality attributes.

---

# Interview Tips

Before answering any requirement-related question, ask yourself:

* Does it describe a **feature**? → Functional Requirement
* Does it describe **performance, security, quality, or behavior**? → Non-Functional Requirement

---

# Today's Biggest Lesson

> **Developers write code.**

> **Software Engineers first understand the requirements, then write code.**

Understanding the problem is more important than writing the solution.
