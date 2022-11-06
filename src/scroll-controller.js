// Gets all DOMs
var main = document.querySelector("main");
var redlining = main.querySelector("#scrolly");
var redliningSticky = redlining.querySelector(".redlining-sticky-img");
var redliningArticle = redlining.querySelector("article");
var redliningSteps = redliningArticle.querySelectorAll(".step");


// Initializes the scrollama
var scroller1 = scrollama();

// Handles the entering of the next step
function handleStepEnterRedlining(response) {
  var currentStep = response.element;

  // Removes previous step, and sets current step to active
  redliningSteps.forEach((step) => step.classList.remove("is-active"));
  currentStep.classList.add("is-active");
}



// Initialized the scroller and event listeners
function init() {
  scroller1
    .setup({
      step: "#scrolly article .step",
      offset: 0.55,
      debug: true,
    })
    .onStepEnter(handleStepEnterRedlining);

  // Checks if window is resized and resizes
  window.addEventListener("resize", scroller1.resize);
}

init();
