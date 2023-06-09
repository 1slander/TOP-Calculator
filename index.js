//Variables
const btnDigits = document.querySelectorAll(".btn.digits");
const btnOperator = document.querySelectorAll(".btn.operators");
const btnEqual = document.querySelector(".equal");
const btnClear = document.querySelector(".clear");
const btnDelete = document.querySelector(".delete");
const btnDot = document.querySelector(".btn.dot");

const screenValue = document.querySelector(".value");
const screenOperation = document.querySelector(".operation");

let value;
let num1;
let num2;
let total;
let operator;
let active = false;
let equalActive = false;

//Events listeners

btnDigits.forEach((button) => {
  button.addEventListener("click", () => {
    //Numbers
    if (!equalActive) {
      console.log(value);
      if (value === undefined) {
        value = `${button.innerText}`;
        console.log("Was Undefined:", value);

        //screenValue.innerText=value;
        showNumbers(value);
      } else {
        value += `${button.innerText}`;
        console.log("Was Not Undefined:", value);
        showNumbers(value);
      }
    }
  });
});

btnOperator.forEach((button) => {
  button.addEventListener("click", () => {
    active = false;
    equalActive = false;
    addOperator();
    switch (button.innerText) {
      case "+":
      case "-":
      case "x":
      case "÷":
        operator = button.innerText;
        break;
    }
    showOperation(operator);
  });
});

btnDot.addEventListener("click", () => {
  if (!active) {
    let newValue = value + ".";
    active = true;
    value = newValue;
    showNumbers(value);
  }
});

btnEqual.addEventListener("click", equal);

btnClear.addEventListener("click", clearScreen);

btnDelete.addEventListener("click", deleteValue);

//Functions
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
  if (num2 === 0) {
    alert("Error Can't divide by 0");
    return 0;
  } else {
    return num1 / num2;
  }
}

//Operate

function operate(num1, operator, num2) {
  let a = parseInt(num1);
  let b = parseInt(num2);
  let result = "";

  switch (operator) {
    case "+":
      //console.log("suma");
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "x":
      result = multiply(a, b);
      break;
    case "÷":
      result = divide(a, b);
      break;
  }

  return Math.round(1000000 * result) / 1000000;
}

// Display

function showNumbers(value) {
  screenValue.innerText = `${value}`;
}

function showOperation(operator) {
  screenOperation.innerText = operator;
}

// Buttons

function addOperator() {
  if (total) {
    showNumbers(total);
  }
  if (!num1 && !num2) {
    console.log("1. !NUM1 & !NUM2");
    num1 = value;
    //console.log("Num1:", num1);
    value = "";
    //console.log("Value when num1 is defined:", value);
  } else if (num1 !== undefined && num2 === undefined) {
    //console.log("Value of num1 when no num2:", num1);
    console.log("2. NUM1 & !NUM2");
    num2 = value;
    //console.log("This Num2:", num2);
    total = operate(num1, operator, num2);
    //console.log("This total:", total);
    num1 = total;
    showNumbers(num1);
    //console.log("This Num1:", num1);
    num2 = undefined;
    //console.log("This Num2 Should be Undefined:", num2);
    value = "";
  } else if (num1 !== undefined && num2 !== undefined) {
    console.log("3. NUM1 & NUM2");
    //console.log("THIS PART IS WORKING");
    total = operate(num1, operator, num2);
    // console.log(`This total when num2 is defined: ${total}`);
    showNumbers(total);
    num1 = total;
    num2 = value;
    value = "";
  }
}

function deleteValue() {
  let newValue = value.slice(0, -1);
  showNumbers(newValue);
  return (value = newValue);
}

function clearScreen() {
  value = "";
  num1 = undefined;
  num2 = undefined;
  total = undefined;
  operator = "";
  active = false;
  equalActive = false;
  showNumbers(value);
  showOperation(operator);
}

function equal() {
  if (!num1 && !num2) {
    return;
    //console.log(value)
  } else {
    equalActive = true;
    //console.log(num1)
    // console.log(num2)
    num2 = value;
    total = Number(operate(num1, operator, num2));

    showNumbers(total);
  }

  //console.log('THis total:', total)
}
