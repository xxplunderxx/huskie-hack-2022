// Gets all DOMs
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var redliningSticky = scrolly.querySelector(".redlining-sticky-img");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");


// Initializes the scrollama
var scroller1 = scrollama();
var scroller2 = scrollama();

// Handles the entering of the next step
function handleStepEnter(response) {
  var currentStep = response.element;

  // Removes previous step, and sets current step to active
  currentStep.classList.add("is-active");
}



// Initialized the scroller and event listeners
function init() {
  scroller1
    .setup({
      step: "#scrolly article .step",
      offset: 0.55,
      //debug: true,
    })
    .onStepEnter(handleStepEnter);

    scroller2
    .setup({
      step: "#scrolly-img article .step",
      offset: 0.55,
      //debug: true,
    })
    .onStepEnter(handleStepEnter);

  // Checks if window is resized and resizes
  window.addEventListener("resize", scroller1.resize);
}

init();