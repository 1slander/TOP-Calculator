//Variables
const btnDigits = document.querySelectorAll(".btn.digits");
const btnOperator = document.querySelectorAll(".btn.operators");
const btnEqual = document.querySelector(".equal");
const btnClear = document.querySelector(".clear");
const btnDelete = document.querySelector(".delete");
const btnDot = document.querySelector(".btn.dot")

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
    // if (!num1 && !num2) {
    //   num1 = +value;
    //   console.log(num1);
    //   value = undefined;
    //   console.log(value);
    // } else if (num1 !== undefined && !num2) {
    //   console.log(num1);
    //   console.log(value);
    //   num2 = +value;
    //   value = undefined;
    // } else if (num1 !== undefined && num2 !== undefined) {
    //   num1 = +total;
    //   num2 = +value;
    //   value = undefined;
    // }
  });
});

btnOperator.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Value when click operator:", value);
    if(total){
      showNumbers(total);
    }
    if (!num1 && !num2) {
      num1 = +value;
      console.log("Num1:", num1);
      value = "";
      console.log("Value when num1 is defined:",value);
    } else if (num1 !== undefined && num2 === undefined) {
      console.log("Value of num1 when no num2:", num1);
      num2 = +value;
      console.log('This Num2:',num2);
      total = operate(num1, operator, num2);
      console.log('This total:',total)
      num1 = +total;
      showNumbers(num1);
      console.log('This Num1:',num1)
      num2 = undefined;
      console.log('This Num2 Should be Undefined:', num2)
      value = "";
    }
     else if (num1 !== undefined && num2 !== undefined) {
      console.log('THIS PART IS WORKING')
      total = operate(num1, operator, num2);
      console.log(`This total when num2 is defined: ${total}`);
      showNumbers(total);
      num1 = +total;
      num2 = +value;
      value = "";
    }
    //Operators
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

btnEqual.addEventListener("click", () => {
  num2 = +value;
  total = operate(num1, operator, num2);
  console.log(`Total:${total} of numbers ${num1} & ${num2} and ${operator}`);
  showNumbers(total);
});

btnClear.addEventListener("click", () => {
  console.log("clear");
  value = "";
  num1 = undefined;
  num2 = undefined;
  total = undefined;
  operator = "";
  showNumbers(value);
  showOperation(operator);
});

btnDelete.addEventListener("click", deleteValue);

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
  //if (value === undefined) screenValue.innerText = " ";
}

function showOperation(operator) {
  
  screenOperation.innerText = operator;
}

function deleteValue() {
  return value.slice(0, -1);
}
