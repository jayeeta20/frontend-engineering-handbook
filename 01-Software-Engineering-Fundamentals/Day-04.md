# Day 04 – Product Backlog & Sprint Planning

## 🎯 Goal

Understand how Agile teams organize, prioritize, and plan work before development begins.

> **Key Lesson:** A successful project is not built by coding everything at once. It is built by planning, prioritizing, and delivering value incrementally.

---

# 1. What is a Product Backlog?

## Definition

A **Product Backlog** is a prioritized list of all the work that needs to be completed for a product.

It contains:

* New Features
* User Stories
* Bug Fixes
* Improvements
* Technical Tasks
* Performance Optimizations
* Security Enhancements

The Product Backlog is continuously updated throughout the project's lifecycle.

---

## Why Do We Need a Product Backlog?

Without a Product Backlog:

* Developers don't know what to build first.
* Teams work on low-priority features.
* Important tasks get delayed.
* Planning becomes difficult.

The Product Backlog provides a clear roadmap for the entire team.

---

## Example Product Backlog (Beauty E-commerce)

| Priority  | Feature                    |
| --------- | -------------------------- |
| 🔴 High   | Login                      |
| 🔴 High   | Register                   |
| 🔴 High   | Product Listing            |
| 🔴 High   | Product Details            |
| 🔴 High   | Add to Cart                |
| 🔴 High   | Checkout                   |
| 🟡 Medium | Wishlist                   |
| 🟡 Medium | Product Reviews            |
| 🟡 Medium | Order History              |
| 🟢 Low    | Coupons                    |
| 🟢 Low    | Loyalty Points             |
| 🟢 Low    | AI Product Recommendations |

---

# 2. What is an Epic?

## Definition

An **Epic** is a large feature that groups together multiple related User Stories.

It is usually too large to complete in a single sprint and is broken into smaller stories.

---

## Example Epics for Our Beauty E-commerce Platform

### Epic 1 – Authentication

* Login
* Register
* Forgot Password
* Reset Password
* Logout

---

### Epic 2 – Product Catalog

* Product Listing
* Product Details
* Categories
* Search
* Filters

---

### Epic 3 – Shopping Cart

* Add to Cart
* Update Quantity
* Remove Item
* Wishlist

---

### Epic 4 – Order & Checkout

* Billing Address
* Shipping Address
* Checkout
* Payment
* Order Confirmation
* Order History

---

# 3. What is a Sprint?

## Definition

A **Sprint** is a fixed period of time (usually 1–3 weeks, commonly 2 weeks) during which the development team completes a selected set of work from the Product Backlog.

Each Sprint has:

* A clear goal
* Selected User Stories
* Defined timeline
* Expected deliverables

---

## Why Do We Use Sprints?

Instead of building the entire application at once, teams deliver small working pieces of the product.

Benefits:

* Faster feedback
* Easier testing
* Lower risk
* Better planning
* Continuous improvement

---

# 4. What is Sprint Planning?

## Definition

Sprint Planning is an Agile meeting where the team decides:

* What work will be completed during the Sprint?
* Which User Stories will be selected?
* Can the team realistically finish them?
* What dependencies or blockers exist?

The selected work becomes the **Sprint Backlog**.

---

# 5. Product Backlog vs Sprint Backlog

| Product Backlog              | Sprint Backlog                                         |
| ---------------------------- | ------------------------------------------------------ |
| Contains all project work    | Contains only the work selected for the current sprint |
| Updated continuously         | Fixed during the sprint (except in special cases)      |
| Managed by the Product Owner | Used by the development team                           |
| Long-term planning           | Short-term execution                                   |

---

# 6. Sprint 1 for Our Beauty E-commerce Platform

## Sprint Goal

Allow customers to create an account and securely log in.

### Sprint Backlog

* Login
* Registration
* Forgot Password
* Reset Password

These features are chosen first because authentication is required before users can access many other parts of the application.

---

# 7. Story Points

## Definition

Story Points are used to estimate the **complexity, effort, and risk** of a User Story.

They are **not** estimates of time.

---

## Why Not Estimate in Hours?

Different developers complete the same task at different speeds.

Example:

* Senior Developer → Login in 3 hours
* Junior Developer → Login in 8 hours

The complexity is the same, but the time differs.

Story Points provide a more consistent way to estimate work.

---

## Example

| User Story      | Story Points |
| --------------- | -----------: |
| Forgot Password |            2 |
| Login           |            3 |
| Registration    |            5 |
| Product Listing |            8 |
| Checkout        |           13 |
| Payment Gateway |           21 |

Higher Story Points indicate higher complexity.

---

# 8. MoSCoW Prioritization

MoSCoW is a prioritization technique used to decide which features should be included in a release.

| Category             | Meaning                                 |
| -------------------- | --------------------------------------- |
| Must Have            | Essential features required for release |
| Should Have          | Important but not mandatory             |
| Could Have           | Nice-to-have features                   |
| Won't Have (for now) | Deferred to a future release            |

---

## Our Beauty E-commerce MVP

### Must Have

* Login
* Product Listing
* Checkout

---

### Should Have

* Wishlist

---

### Could Have

* Coupons

---

### Won't Have (Version 1)

* AI Product Recommendations

---

# 9. Real Agile Workflow

```text
Business Idea
      ↓
Business Goals
      ↓
Requirements
      ↓
User Stories
      ↓
Acceptance Criteria
      ↓
Product Backlog
      ↓
Sprint Planning
      ↓
Sprint Backlog
      ↓
Development
      ↓
Testing
      ↓
Deployment
      ↓
Maintenance
```

This is the workflow followed by most Agile software teams.

---

# 10. Startup vs Enterprise

## Startup

* Smaller Product Backlog
* Faster decisions
* Less documentation
* Quick iterations

---

## Enterprise Company

* Large Product Backlog
* Multiple development teams
* Detailed planning
* Formal documentation
* Long-term product roadmap

---

# 11. Common Beginner Mistakes

* Trying to build every feature at once.
* Not prioritizing work.
* Starting with low-priority features.
* Creating very large User Stories.
* Ignoring feature dependencies.

---

# 12. Common Production Mistakes

* Overloading a Sprint.
* Poor estimation.
* Unclear priorities.
* Frequent scope changes.
* Lack of communication during Sprint Planning.

---

# 13. Interview Questions

## Q1. What is a Product Backlog?

A Product Backlog is a prioritized list of all features, improvements, bug fixes, and technical tasks required to build and maintain a product.

---

## Q2. What is the difference between a Product Backlog and a Sprint Backlog?

**Product Backlog**

* Contains all work for the product.
* Continuously updated.

**Sprint Backlog**

* Contains only the work selected for the current Sprint.
* Focuses on short-term execution.

---

## Q3. What is an Epic?

An Epic is a large feature that groups together multiple related User Stories and is divided into smaller stories for implementation.

---

## Q4. Why do Agile teams use Story Points instead of hours?

Story Points estimate the complexity, effort, and risk of a task rather than time. Time varies depending on a developer's experience, but complexity remains relatively consistent.

---

## Q5. What is Sprint Planning?

Sprint Planning is an Agile meeting where the team selects User Stories from the Product Backlog, defines the Sprint Goal, and creates the Sprint Backlog for the upcoming Sprint.

---

# Key Definitions

### Product Backlog

A prioritized list of all work required for a product.

---

### Epic

A large feature made up of multiple related User Stories.

---

### Sprint

A fixed period during which a selected set of work is completed.

---

### Sprint Backlog

The collection of User Stories chosen for the current Sprint.

---

### Story Points

A relative measure of a User Story's complexity, effort, and risk.

---

### MoSCoW Prioritization

A technique for prioritizing features into Must Have, Should Have, Could Have, and Won't Have categories.

---

# Things I Learned Today

* A Product Backlog contains all work planned for the product.
* A Sprint Backlog contains only the work selected for the current Sprint.
* Epics group related User Stories into larger features.
* Story Points measure complexity rather than time.
* Sprint Planning helps teams decide what they can realistically deliver.
* Prioritization ensures that the most valuable features are built first.

---

# Mistakes I Made

* I initially thought Story Points were mainly about estimating time, but learned they estimate complexity, effort, and risk.
* I described Sprint Planning as simply splitting tasks, but learned it is a collaborative planning meeting with a defined Sprint Goal.
* I grouped "Shopping" into one Epic, then learned that breaking it into Product Catalog and Shopping Cart creates a clearer project structure.

---

# Interview Tips

When answering Agile questions in interviews:

1. Explain the definition.
2. Explain why it is used.
3. Give a real-world example.

Example:

> "Story Points estimate complexity instead of time because developers work at different speeds. This helps teams plan sprints more accurately."

This approach makes your answers sound more practical and professional.

---

# Today's Biggest Lesson

> **The Product Backlog tells us everything we need to build.**
>
> **Sprint Planning helps us decide what we can build now.**
>
> **Successful software is built through continuous planning, prioritization, and incremental delivery—not by building everything at once.**
