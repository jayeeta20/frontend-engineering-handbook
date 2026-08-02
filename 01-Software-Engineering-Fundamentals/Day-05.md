# Day 05 – Software Development Life Cycle (SDLC)

## 🎯 Goal

Understand how software is developed from an idea to a finished product using the **Software Development Life Cycle (SDLC)**.

> **Key Lesson:** Writing code is only one phase of software development. Professional software is built through planning, designing, developing, testing, deploying, and continuously maintaining the application.

---

# 1. What is SDLC?

## Definition

**Software Development Life Cycle (SDLC)** is a structured process used to plan, design, develop, test, deploy, and maintain software.

It provides a step-by-step approach that helps teams build high-quality software efficiently and reduces project risks.

---

## Why Do We Need SDLC?

Without SDLC:

* Developers start coding without understanding the business.
* Requirements become unclear.
* Bugs increase.
* Project cost and timeline increase.
* Teams become disorganized.
* Features may not meet customer expectations.

Using SDLC provides:

* Better planning
* Clear communication
* Better software quality
* Lower development risk
* Easier maintenance
* Faster delivery

---

# 2. The Seven Phases of SDLC

```text
Idea
   ↓
1. Planning
   ↓
2. Requirement Analysis
   ↓
3. Design
   ↓
4. Development
   ↓
5. Testing
   ↓
6. Deployment
   ↓
7. Maintenance
```

Every software project follows these phases, although the exact process may vary depending on the development methodology (Agile, Waterfall, etc.).

---

# 3. Phase 1 – Planning

## Goal

Understand **why** the software should be built.

### Questions Asked

* What problem are we solving?
* Who are the target users?
* What are the business goals?
* What is the budget?
* What is the timeline?
* Is the project feasible?

### Our Beauty E-commerce Example

Business Goal:

> Sell beauty products online to customers across India.

### Frontend Developer's Role

* Understand business goals.
* Ask UI-related questions.
* Estimate technical feasibility.

---

# 4. Phase 2 – Requirement Analysis

## Goal

Understand **what** the application should do.

During this phase, teams define:

* Functional Requirements
* Non-Functional Requirements
* User Roles
* Business Rules

### Example

Functional Requirements:

* Login
* Register
* Product Listing
* Product Details
* Cart
* Checkout

Non-Functional Requirements:

* SEO
* Responsive Design
* Performance
* Accessibility

### Frontend Developer's Role

* Clarify UI behavior.
* Identify edge cases.
* Review user flows.

---

# 5. Phase 3 – Design

## Goal

Plan **how** the application will look and behave.

Design activities include:

* Wireframes
* User Flows
* Figma Designs
* Design System
* Component Planning

### Our Project

The **ShineUp Beauty Platform** UI design belongs to this phase.

### Frontend Developer's Role

* Review Figma designs.
* Suggest reusable components.
* Plan responsive layouts.
* Discuss accessibility and UX improvements.

---

# 6. Phase 4 – Development

## Goal

Build the application.

Frontend developers work on:

* Login Page
* Home Page
* Product Listing
* Product Details
* Shopping Cart
* Checkout
* API Integration

Backend developers build:

* APIs
* Authentication
* Database
* Payment Integration

### Frontend Developer's Responsibilities

* Build reusable components.
* Integrate APIs.
* Write clean and maintainable code.
* Ensure responsiveness and accessibility.
* Optimize performance.

---

# 7. Phase 5 – Testing

## Goal

Ensure the application works correctly before release.

Testing includes:

* Functional Testing
* UI Testing
* Responsive Testing
* Accessibility Testing
* Performance Testing

### Frontend Developer's Responsibilities

* Test implemented features.
* Fix UI bugs.
* Verify responsive layouts.
* Check accessibility.
* Work with QA engineers to resolve issues.

---

# 8. Phase 6 – Deployment

## Goal

Release the application to production.

Popular deployment platforms:

* Vercel
* Netlify
* AWS
* Azure

### Frontend Developer's Responsibilities

* Create production builds.
* Deploy the application.
* Verify production functionality.
* Fix deployment issues if needed.

---

# 9. Phase 7 – Maintenance

## Goal

Keep the application stable and improve it after release.

Maintenance activities include:

* Fix production bugs.
* Add new features.
* Improve performance.
* Apply security updates.
* Update project dependencies.
* Monitor user feedback.

Software development does **not** end after deployment.

Professional software evolves continuously.

---

# 10. SDLC Applied to Our Beauty E-commerce Project

| Phase                | Example Activity                                         |
| -------------------- | -------------------------------------------------------- |
| Planning             | Define business goals and target audience.               |
| Requirement Analysis | Create Functional and Non-Functional Requirements.       |
| Design               | Design pages in Figma and plan user flows.               |
| Development          | Build UI components and integrate APIs using Next.js.    |
| Testing              | Verify functionality, responsiveness, and accessibility. |
| Deployment           | Deploy the application to Vercel.                        |
| Maintenance          | Fix bugs, improve performance, and add new features.     |

---

# 11. Frontend Developer Responsibilities

## During the Design Phase

* Review Figma designs.
* Plan reusable UI components.
* Suggest responsive and accessible improvements.

---

## During the Testing Phase

* Verify UI functionality.
* Test responsive layouts across devices.
* Fix bugs reported by QA.

---

# 12. Startup vs Enterprise

## Startup

* Smaller teams.
* Faster decisions.
* Less documentation.
* Rapid feature releases.

---

## Enterprise Company

* Detailed planning.
* Multiple development teams.
* Formal documentation.
* Dedicated QA, DevOps, and Security teams.
* Structured release process.

---

# 13. Common Beginner Mistakes

* Starting development without understanding requirements.
* Ignoring design documents.
* Skipping testing.
* Thinking deployment means the project is complete.
* Not considering maintenance.

---

# 14. Common Production Mistakes

* Poor project planning.
* Frequent requirement changes without process.
* Lack of testing.
* No monitoring after deployment.
* Ignoring technical debt.

---

# 15. Interview Questions

## Q1. What is SDLC?

SDLC is a structured process used to plan, design, develop, test, deploy, and maintain software.

---

## Q2. Why is SDLC important?

It helps teams build software systematically, reduce risks, improve quality, and deliver projects on time.

---

## Q3. What are the phases of SDLC?

1. Planning
2. Requirement Analysis
3. Design
4. Development
5. Testing
6. Deployment
7. Maintenance

---

## Q4. Which phase comes before Development?

The **Design** phase comes immediately before Development.

---

## Q5. Does software development end after deployment?

No.

After deployment, the application enters the Maintenance phase, where bugs are fixed, performance is improved, dependencies are updated, and new features are added.

---

# Key Definitions

### SDLC

A structured process for developing and maintaining software.

---

### Planning

Understanding business goals, project scope, timeline, and feasibility.

---

### Requirement Analysis

Identifying Functional and Non-Functional Requirements.

---

### Design

Planning the application's UI, UX, architecture, and user flow.

---

### Development

Building the application by writing code.

---

### Testing

Verifying that the software works correctly and meets requirements.

---

### Deployment

Releasing the application for users.

---

### Maintenance

Improving, updating, and supporting the software after release.

---

# Things I Learned Today

* SDLC provides a structured approach to software development.
* Coding is only one phase of the software development process.
* Every SDLC phase has a specific goal and responsibilities.
* Frontend developers contribute to almost every SDLC phase.
* Software continues to evolve even after deployment.

---

# Mistakes I Made

* I initially thought SDLC was only for websites, but learned it applies to all types of software.
* I referred to "QA" as a phase, but learned the formal SDLC phase is **Testing**.
* I initially focused only on coding during Development, but learned that performance, accessibility, and maintainability are also key responsibilities.
* I forgot that Maintenance includes security updates, dependency updates, and continuous improvements.

---

# Interview Tips

When explaining SDLC in interviews:

1. Define SDLC.
2. List all seven phases in order.
3. Explain the purpose of each phase.
4. Mention how frontend developers contribute during the lifecycle.
5. Give a real-world example from a project.

This structured approach demonstrates both technical understanding and practical experience.

---

# Today's Biggest Lesson

> **Professional software is not created by writing code first.**

> **It is created by understanding the business, planning carefully, designing thoughtfully, developing systematically, testing thoroughly, deploying safely, and continuously improving the product.**

A great frontend engineer contributes throughout the Software Development Life Cycle—not just during development.
