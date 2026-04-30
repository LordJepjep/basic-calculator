const operators = ["+", "-", "x", "/"];

let currentValue = 0;
let currentInput = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(input) {
  console.log(`Input: ${input}`);

  const parts = input.split(/([+*/]|(?<=\d)-)/).filter((p) => p !== "");
  console.log(parts);

  if (parts.length === 0) return;

  const num1 = Number(parts[0]);

  if (parts.length <= 1) {
    currentValue = num1;
    return;
  }

  const operator = parts[1];
  const num2 = Number(parts[2]);

  switch (operator) {
    case "+":
      currentValue = add(num1, num2);
      break;
    case "-":
      currentValue = subtract(num1, num2);
      break;
    case "*":
      currentValue = multiply(num1, num2);
      break;
    case "/":
      currentValue = divide(num1, num2);
      break;
  }
}

function updateScreens(mainScreenText, secondScreenText) {
  screen.textContent = mainScreenText;
  secondaryScreen.textContent = secondScreenText;
}

function operate() {
  calculate(currentInput);
  updateScreens(currentValue, currentInput);
  currentInput = currentValue.toString();
}

function clear() {
  currentInput = "";
  currentValue = 0;
  updateScreens("", "");
}

function backspace() {
  let newInput = currentInput.slice(0, -1);
  currentInput = newInput;
  updateScreens(newInput, "");
}

function handleInput(btnText, isOperator, isFunction, isCalculate) {}

const inputField = document.querySelector("#calcInput");

const screen = document.querySelector("#mainScreen");
const secondaryScreen = document.querySelector("#secondaryScreen");

const inputButtons = document.querySelector(".inputButtons");
inputButtons.addEventListener("click", (e) => {
  if (e.target.classList.contains("inputButton")) {
    const displayMap = {
      "−": "-",
      x: "*",
      "÷": "/",
      "=": "=",
    };

    const btnText = displayMap[e.target.textContent] || e.target.textContent;
    const isEqual = e.target.textContent === "=";
    const isOperator = e.target.classList.contains("operatorButton");
    const isFunction = e.target.classList.contains("functionButton");
    // const hasOperator = operators.some((op) => currentInput.includes(op));
    const endsWithOperator = operators.some((op) => currentInput.endsWith(op));

    if (currentInput.toString() === "NaN") {
      clear();
    }
    if (isFunction) {
      switch (btnText) {
        case "Clear":
          clear();
          break;
        case "Backspace":
          backspace();
          break;
      }
      return;
    }

    if (isEqual) {
      operate();
      screen.textContent = currentInput;
      return;
    }

    if (
      isOperator &&
      btnText === "-" &&
      (currentInput === "" || operators.includes(currentInput.slice(-1)))
    ) {
      currentInput += "-";
      updateScreens(currentInput, "");
      return;
    }

    if (isEqual || (isOperator && endsWithOperator)) {
      console.log("operator/calculate");
      operate();
    }
    console.log("everthing else");

    currentInput += btnText;
    updateScreens(currentInput, "");
    console.log(`CurrentInput: ${currentInput}`);
  }
});

/** Plan
 *  - Create UI (grid-style)
 *  - wire UI to script
 *  - 5+5 then clicking an operator will calculate the initial values
 *  - Backspace button, clear button, decimal button
 */

/**
 * Next to add: keyboard support
 * Next to add: if NaN, display text instead
 * Fix: if operation is done (equals) then a number is clicked then it should reset the input
 * Ex: 4+5 will result in 9 then if user inputs a number like 7 then it should reset the input
 * and just show 7
 * */

/**
 * If isNaN, reset calculator on input
 */
