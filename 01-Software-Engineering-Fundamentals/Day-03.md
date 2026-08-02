# Day 03 – User Stories & Acceptance Criteria

## 🎯 Goal

Understand how software companies convert business requirements into development tasks using **User Stories** and **Acceptance Criteria**.

> **Key Lesson:** Requirements describe the system, User Stories describe the user's goal, and Acceptance Criteria define when the work is complete.

---

# 1. Why Do We Need User Stories?

After gathering requirements, developers still need to understand:

* Who needs this feature?
* Why is this feature important?
* What value does it provide?

A User Story answers these questions from the user's perspective.

Instead of thinking like a developer, we think like the customer.

---

# 2. What is a User Story?

## Definition

A **User Story** is a short description of a feature written from the user's point of view.

It explains:

* **Who** needs the feature.
* **What** they want.
* **Why** they want it.

---

## Standard Format

Every professional User Story follows this format:

> **As a** `<User Role>`
>
> **I want** `<Goal>`
>
> **So that** `<Business Value>`

---

## Example

### ❌ Bad

> Build Add to Cart Page.

This is a task, not a User Story.

---

### ✅ Good

> **As a registered customer, I want to add products to my shopping cart so that I can purchase multiple products together.**

---

# 3. Why Do Companies Use User Stories?

User Stories help:

* Product Managers explain business needs.
* Designers understand user flow.
* Developers understand what to build.
* QA Engineers understand what to test.
* Stakeholders understand business value.

---

# 4. Functional Requirement vs User Story

| Functional Requirement                                   | User Story                                                                                              |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| A registered user can add products to the shopping cart. | As a registered customer, I want to add products to my shopping cart so that I can purchase them later. |

## Difference

### Functional Requirement

Describes **what the system should do.**

---

### User Story

Describes **what the user wants to achieve and why.**

---

# 5. Acceptance Criteria

## Definition

Acceptance Criteria define the conditions that must be satisfied before a User Story is considered complete.

Think of them as a checklist for developers and QA engineers.

If all Acceptance Criteria pass, the feature is complete.

---

## Example

### User Story

> As a registered customer, I want to add products to my shopping cart so that I can purchase multiple products together.

### Acceptance Criteria

1. The user must be authenticated before adding products to the cart.
2. If the user is not logged in, the system should display a login prompt.
3. The user must select all required product variants (such as shade or size) before adding the product.
4. The user must select a valid quantity greater than zero.
5. The selected quantity must not exceed the available stock.
6. After adding a product successfully, the cart count should update immediately.
7. A success message should be displayed after the product is added to the cart.

---

# 6. Good Acceptance Criteria

Good Acceptance Criteria should be:

* Clear
* Specific
* Testable
* Unambiguous
* Easy for QA to verify

---

## ❌ Bad Example

> User should add product.

Very vague.

---

## ✅ Better Example

> The user must select all required variants before adding a product to the cart.

Now developers and testers know exactly what to implement and verify.

---

# 7. INVEST Principle

Professional User Stories should follow the **INVEST** principle.

| Letter | Meaning     | Explanation                                                           |
| ------ | ----------- | --------------------------------------------------------------------- |
| **I**  | Independent | The story should be independent of other stories as much as possible. |
| **N**  | Negotiable  | Implementation details can be discussed and improved.                 |
| **V**  | Valuable    | The story must provide value to users or the business.                |
| **E**  | Estimable   | Developers should be able to estimate the effort required.            |
| **S**  | Small       | The story should be small enough to complete within a sprint.         |
| **T**  | Testable    | QA should be able to verify whether the story is complete.            |

---

# 8. Real Jira Example

### Story ID

ECOM-101

### Title

Add Product to Cart

### User Story

> As a registered customer, I want to add products to my shopping cart so that I can purchase multiple products together.

### Acceptance Criteria

* User must be logged in.
* Product must be in stock.
* Required variants must be selected.
* Quantity must be greater than zero.
* Cart icon should update immediately.
* Success message should be displayed.

---

# 9. Common Beginner Mistakes

* Writing tasks instead of User Stories.
* Forgetting the "So that..." part.
* Not mentioning the user role.
* Writing vague Acceptance Criteria.
* Mixing implementation details with business requirements.

---

# 10. Common Production Mistakes

* User Stories are too large.
* Missing edge cases.
* No Acceptance Criteria.
* Acceptance Criteria cannot be tested.
* Business value is not clearly defined.

---

# 11. Startup vs Enterprise

## Startup

* Short User Stories.
* Faster delivery.
* Less documentation.

---

## Enterprise Company

* Detailed User Stories.
* Clear Acceptance Criteria.
* Multiple team reviews.
* Better documentation for large teams.

---

# 12. Interview Questions

## Q1. What is a User Story?

A User Story is a short description of a feature written from the user's perspective that explains **who needs the feature, what they want, and why they need it.**

---

## Q2. Why do Agile teams use User Stories?

User Stories help Product Managers, Designers, Developers, QA Engineers, and Stakeholders understand the business value and expected user behavior before development begins.

---

## Q3. What is the difference between a Functional Requirement and a User Story?

### Functional Requirement

Describes **what the system should do**.

### User Story

Describes **what the user wants to achieve and why**.

---

## Q4. What are Acceptance Criteria?

Acceptance Criteria are a set of conditions that define when a User Story is considered complete and ready for testing.

---

## Q5. What does INVEST stand for?

* **I** – Independent
* **N** – Negotiable
* **V** – Valuable
* **E** – Estimable
* **S** – Small
* **T** – Testable

---

# Key Definitions

### User Story

A short description of a feature written from the user's perspective.

---

### Acceptance Criteria

A list of testable conditions that determine whether a User Story has been successfully implemented.

---

### INVEST Principle

A guideline for writing high-quality User Stories that are Independent, Negotiable, Valuable, Estimable, Small, and Testable.

---

# Things I Learned Today

* User Stories describe features from the user's perspective.
* Acceptance Criteria define when a feature is complete.
* Functional Requirements explain **what** the system should do.
* User Stories explain **what the user wants** and **why**.
* Good User Stories follow the INVEST principle.
* Acceptance Criteria should always be specific and testable.

---

# Mistakes I Made

* I initially wrote "User" instead of specifying the user role (Registered Customer).
* I wrote an implementation step ("Check authentication") instead of describing expected system behavior.
* I mistakenly wrote that quantity could be negative, but learned that quantity must be greater than zero and should not exceed available stock.
* I didn't initially include the business value ("So that...") in my User Story.

---

# Interview Tips

Before writing a User Story, ask yourself:

1. Who is the user?
2. What does the user want?
3. Why does the user need this feature?
4. Can QA test this story using the Acceptance Criteria?

If the answer to all four questions is **Yes**, your User Story is likely well written.

---

# Today's Biggest Lesson

> **Requirements tell us what to build.**
>
> **User Stories tell us why users need it.**
>
> **Acceptance Criteria tell us when it is done.**

Great software is built by understanding users first, then writing code—not the other way around.
