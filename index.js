//Variables
const btnDigits = document.querySelectorAll(".btn.digits");
const btnOperator = document.querySelectorAll(".btn.operators");
const btnEqual = document.querySelector(".equal");

const screenValue = document.querySelector(".value");
const screenOperation = document.querySelector(".operation");
let value;
let num1;
let num2;
let total;
let operator;
const operation = [];

//Events listeners

btnDigits.forEach((button) => {
  button.addEventListener("click", () => {
    //Numbers
    if (value === undefined) {
      value = `${button.innerText}`;
      //screenValue.innerText=value;
      showNumbers(value);
    } else {
      value += `${button.innerText}`;
      showNumbers(value);
    }
    if (!num1 && !num2) {
      num1 = +value;
      value = undefined;
    } else if (num1 !== undefined && !num2) {
      console.log(num1);
      console.log(value);
      num2 = +value;
      value = undefined;
    } else if (num1 !== undefined && num2 !== undefined) {
      num1 = +total;
      num2 = +value;
      value = undefined;
    }
  });
});

btnOperator.forEach((button) => {
  button.addEventListener("click", () => {
    //Operators
    switch (button.innerText) {
      case "+":
      case "-":
      case "x":
      case "÷":
        operator = button.innerText;
        break;
    }

    showNumbers(value);
    showOperation(operator);
  });
});

btnEqual.addEventListener("click", () => {
  total = operate(num1, operator, num2);
  showNumbers(total);
});

// Math Operations

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

//Operate

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      //console.log("suma");
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "÷":
      return divide(num1, num2);
      break;
  }
}

// display

function showNumbers(value) {
  screenValue.innerText = value;
  if (value === undefined) screenValue.innerText = " ";
}

function showOperation(operator) {
  screenOperation.innerText = operator;
}
