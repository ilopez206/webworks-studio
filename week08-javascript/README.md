# Week 8 — JavaScript Interaction Handoff

## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors

1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection

What elements did your script need to select, and why?

The elements that the script needed to select are the classes of the html code/section as identified. The script works by reading that paricular section and waits for the users actions.

### Decision 2 — Event Handling

What events did you listen for? Why were those events appropriate?

I used the click listener as it was more easier to work with for the forms, if something was/wasn't selected then the script will give a feedback to the user.

### Decision 3 — State / DOM Update

How did the interface change after user action?

The Javascript will listen to the user input and then give back an appropiate to what the user is looking for/missing.

### Decision 4 — Accessibility

How did you preserve or improve keyboard/accessibility behavior?

Making the page more readable and giving the user feedback with the forms and buttons.

---

## Testing Notes

### Difficulty Disclosure

- Mouse: Checks and is working
- Keyboard: Checks and is working
- `aria-expanded`: Working as intented when button is pressed
- Console errors: No console errors appear

### Planning Form

- Empty/invalid submission: User will recieve feedback on empty submissions
- Valid submission: User will recieve feedback on completed submissions
- Keyboard: Keyboard controls are working as intended
- Console errors: Had a issue with a typo in line 38 for script.js. Issue has been resolved and no console errors appear and the code is working as intended.

---

## Live Site

[\[Add GitHub Pages URL here.\]](https://ilopez206.github.io/webworks-studio/week08-javascript/)
