const callStackEl = document.getElementById("callStack");
const memoryEl = document.getElementById("memory");
const executionEl = document.getElementById("execution");
const notificationEl = document.getElementById("notification");
const startBtn = document.getElementById("startBtn");

let callStack = [];
let memory = {};
let steps = [];
let stepIndex = 0;
let interval;

/* =========================
   DEFINITIONS (TEACHABLE)
========================= */
const definitions = {
  "Global Execution Context created":
    "JavaScript starts by creating the Global Execution Context. It sets up memory and the call stack.",

  "Memory Phase: x, foo, bar allocated":
    "In the Memory Phase, variables get 'undefined' and functions get their full definitions.",

  "Execution Phase: x = 10":
    "Now JavaScript executes code line by line and assigns actual values.",

  "Calling foo()":
    "Calling a function creates a new Function Execution Context.",

  "foo Memory Phase: y allocated":
    "Memory is allocated for foo() variables before executing its code.",

  "foo Execution Phase: y = 20":
    "foo() execution phase assigns actual values.",

  "Calling bar()":
    "bar() is invoked, so its execution context is pushed to the Call Stack.",

  "bar Memory Phase: z allocated":
    "bar() memory phase allocates space for variables.",

  "bar Execution Phase: z = 30":
    "bar() execution phase assigns values.",

  "bar() execution completed":
    "bar() finishes execution and is removed from the Call Stack.",

  "foo() execution completed":
    "foo() finishes execution and is popped from the Call Stack.",

  "Global execution completed":
    "All code has finished executing. Global Execution Context is removed."
};

/* =========================
   CORE FUNCTIONS
========================= */
function render() {
  callStackEl.innerHTML = callStack
    .slice()
    .reverse()
    .map(item => `<li>${item}</li>`)
    .join("");

  memoryEl.textContent = JSON.stringify(memory, null, 2);

  executionEl.innerHTML = steps
    .slice(0, stepIndex)
    .map(step =>
      step.includes("Memory")
        ? "🧠 " + step
        : "⚙️ " + step
    )
    .join("\n");
}

function showNotification(step) {
  notificationEl.textContent = definitions[step] || "";
}

function pushStack(name) {
  callStack.push(name);
}

function popStack() {
  callStack.pop();
}

/* =========================
   STEP BUILDER
========================= */
function buildSteps() {
  steps = [
    "Global Execution Context created",
    "Memory Phase: x, foo, bar allocated",
    "Execution Phase: x = 10",

    "Calling foo()",
    "foo Memory Phase: y allocated",
    "foo Execution Phase: y = 20",

    "Calling bar()",
    "bar Memory Phase: z allocated",
    "bar Execution Phase: z = 30",

    "bar() execution completed",
    "foo() execution completed",
    "Global execution completed"
  ];
}

/* =========================
   STEP EXECUTION
========================= */
function executeStep() {
  if (stepIndex >= steps.length) {
    clearInterval(interval);
    return;
  }

  const step = steps[stepIndex];
  showNotification(step);

  switch (step) {
    case "Global Execution Context created":
      pushStack("Global Execution Context");
      break;

    case "Memory Phase: x, foo, bar allocated":
      memory = { x: undefined, foo: "function", bar: "function" };
      break;

    case "Execution Phase: x = 10":
      memory.x = 10;
      break;

    case "Calling foo()":
      pushStack("foo Execution Context");
      break;

    case "foo Memory Phase: y allocated":
      memory.y = undefined;
      break;

    case "foo Execution Phase: y = 20":
      memory.y = 20;
      break;

    case "Calling bar()":
      pushStack("bar Execution Context");
      break;

    case "bar Memory Phase: z allocated":
      memory.z = undefined;
      break;

    case "bar Execution Phase: z = 30":
      memory.z = 30;
      break;

    case "bar() execution completed":
      popStack();
      break;

    case "foo() execution completed":
      popStack();
      break;

    case "Global execution completed":
      popStack();
      break;
  }

  stepIndex++;
  render();
}

/* =========================
   START BUTTON
========================= */
startBtn.onclick = () => {
  callStack = [];
  memory = {};
  steps = [];
  stepIndex = 0;

  buildSteps();
  render();

  clearInterval(interval);
  interval = setInterval(executeStep, 900);
};
