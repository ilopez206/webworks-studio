"use strict";

const infoButton = document.querySelector("#difficulty-toggle");
const infoPanel = document.querySelector("#difficulty-panel");

infoButton.addEventListener("click", () => {
  const isOpen = infoButton.getAttribute("aria-expanded") === "true";
  console.log(isOpen);
  infoPanel.hidden = isOpen;
  infoButton.setAttribute("aria-expanded", String(!isOpen));
});

const planForm = document.querySelector("#hike-form");

const trailChoice = document.querySelector("#trail");

const trailHours = document.querySelector("#hours");

const trailExperience = document.querySelector("#experience");

const feedback = document.querySelector("#form-feedback");

planForm.addEventListener("submit", (event) => {
  if (!planForm.checkValidity()) {
    return;
  }
  console.log(planForm);
  event.preventDefault();

  feedback.textContent = `Plan ready for ${trailChoice.value} in ${trailHours.value} hours for a ${trailExperience.value} hiker. Please check trail conditions before your arrival.`;
  console.log(feedback);
});

const checkbox = document.querySelector("#confirm");

const checkButton = document.querySelector("#button");

const checkMessage = document.querySelector("#form-feedback");

checkButton.addEventListener("click", () => {
  if (checkbox.checked) {
    checkMessage.textContent = "You're ready to continue.";
  } else {
    checkMessage.textContent = "Please check current trail conditions first.";
  }
  console.log(checkMessage);
});
