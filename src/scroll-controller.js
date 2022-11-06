// Gets all DOMs
var main = document.querySelector("main");
var redlining = main.querySelector("#redlining");
var redliningSticky = redlining.querySelector(".redlining-sticky-img");
var redliningArticle = redlining.querySelector("article");
var redliningSteps = redliningArticle.querySelectorAll(".redlining-step");

var foodDesert = main.querySelector("#food-desert");
var foodDesertArticle = foodDesert.querySelector("article");
var foodDesertSteps = foodDesertArticle.querySelectorAll(".food-desert-step");

// Initializes the scrollama
var scroller1 = scrollama();

// Handles the entering of the next step
function handleStepEnterRedlining(response) {
  var currentStep = response.element;

  // Removes previous step, and sets current step to active
  foodDesertSteps.forEach((step) => step.classList.remove("is-active"));
  redliningSteps.forEach((step) => step.classList.remove("is-active"));
  currentStep.classList.add("is-active");
}

// Initializes the scrollama
var scroller2 = scrollama();

// Handles the entering of the next step
function handleStepEnterFoodDesert(response) {
  var currentStep = response.element;

  // Removes previous step, and sets current step to active
  redliningSteps.forEach((step) => step.classList.remove("is-active"));
  foodDesertSteps.forEach((step) => step.classList.remove("is-active"));
  currentStep.classList.add("is-active");
}

// Initialized the scroller and event listeners
function init() {
  scroller1
    .setup({
      step: "#redlining article .redlining-step",
      offset: 0.33,
      debug: true,
    })
    .onStepEnter(handleStepEnterRedlining);

  scroller2
    .setup({
      step: "#food-desert article .food-desert-step",
      offset: 0.33,
      debug: true,
    })
    .onStepEnter(handleStepEnterFoodDesert);

  // Checks if window is resized and resizes
  window.addEventListener("resize", scroller1.resize);
}

init();
