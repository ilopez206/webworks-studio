# Week 10: Meet React — Component-Based Web Development

## Project Overview

**Role:** Junior Front-End Developer  
**Project:** Community Connect React Service Directory

Briefly describe what you refactored and added.

Added a filtering feature to find a specific topic/service. Refactored the code by adding a
service card feature to help organize the code better.

---

# React Decisions

Document approximately three meaningful React decisions.

## Decision 1

**React Concept:**  
ServiceCard.jsx

**Used For:**  
Used for the service section of the page.

**Why It Helps:**  
This helps the code by making it easier to read. By giving the service section a function, it
allows us to use other strings in the code to fill in the service part without having to
input the information twice and hard code each section of the cards.

## Decision 2

**React Concept:**
Making the buttons more dynamic.

**Used For:**
The button sections for selecting a service.

**Why It Helps:**
This helps by setting the page up for selecting a service. When we select the service, we
want it to stay on the selection and give the user feedback that they picked the selection.

## Decision 3

**React Concept:**
Filtering

**Used For:**
Filtering the service that is selected.

**Why It Helps:**
This helps by organizing the page for what the user chooses. Not only does it make the page more functional, but also on the code end of it it makes the code a lot more neater and calls the function if needed from the service section.

---

# React Reflection

Write approximately **75–100 words** responding to:

> How is working with React components different from manipulating the DOM directly as you did in Week 8? What seems easier, and what seems more complex?

Working with react components directly gives the user better control of handling sections of the page rather than DOM. With DOM,
you are essentially working with each component one by one, which can take some time especially when working in the sections.
In terms of functionality and purpose, i'd say react is a bit more better when it comes to organizing your work and utilizing the code
to its potential instead of hard coding all the work with DOM. Though I would say learning about the react functions was a bit
confusing at first, though the pay off is worth it with a cleaner looking code. I do want to be better at react and its something
that I wouldn't mind learning a bit more.

---

# Testing Notes

- [ ] `npm install` completed successfully
- [ ] `npm run dev` runs the project
- [ ] ServiceCard is reusable
- [ ] Services render from the supplied array
- [ ] Every rendered service uses a stable key
- [ ] All filter works
- [ ] Health filter works
- [ ] Housing filter works
- [ ] Community filter works
- [ ] Active filter is visually clear
- [ ] Active filter uses an accessible programmatic state
- [ ] Keyboard interaction works
- [ ] Browser console has no unresolved warnings/errors
- [ ] `npm run build` completes successfully

---

# Final Handoff Check

- [ ] My project folder is named `week10-react`
- [ ] I used the supplied React/Vite project
- [ ] `ServiceCard.jsx` exists
- [ ] I used props
- [ ] I used `map()`
- [ ] I used stable keys
- [ ] I used `useState()`
- [ ] I used React event handling
- [ ] I used native buttons for filters
- [ ] `node_modules` is not committed
- [ ] My README is complete
- [ ] I committed and pushed the completed project
