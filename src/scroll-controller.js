// Gets all DOMs
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");


// Initializes the scrollama
var scroller = scrollama();


// Handles the entering of the next step
function handleStepEnter(response) {
    var currentStep = response.element;

    // Removes previous step, and sets current step to active
    steps.forEach(step => step.classList.remove('is-active'));
    currentStep.classList.add('is-active');

    // Updates background square <p> to the data from current step
    sticky.querySelector("p").innerText = currentStep.dataset.step;
}


// Initialized the scroller and event listeners
function init() {
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.33,
            debug: true
        })
        .onStepEnter(handleStepEnter);

    // Checks if window is resized and resizes
    window.addEventListener("resize", scroller.resize);
}

init();