//Variables
const buttons = document.querySelectorAll(".btn");
const screenValue = document.querySelector(".value");
const screenOperation=document.querySelector(".operation");
let value;
let operator;
const operation = [];


//Events listeners

buttons.forEach(button=>{
 button.addEventListener('click',()=>{
  //Operators
  if(button.innerText==='+' || button.innerText==='-' || button.innerText==='x' || button.innerText==='÷'){
   operation.push(value);
   operator=button.innerText;
   value=undefined;
   showNumbers(value);
   showOperation(operator);

//Numbers

  } else if(value===undefined){
    value = `${button.innerText}`
    //screenValue.innerText=value;
    showNumbers(value);

  }else{
    value+=`${button.innerText}`
    showNumbers(value);
    };
   
 
  console.log(value)
 })
})




// Math Operations

function add(num1,num2){
 return num1 + num2;

}

function subtract(num1,num2){
 return num1-num2;

}

function multiply(num1,num2){
 return num1*num2;

}

function divide(num1,num2){
 return num1/num2;

}

//Operate

function operate(operator,num1,num2){
 switch(operator){
  case '+':
    return add(num1,num2);
    break;
    case '-':
    return subtract(num1,num2);
    break;
    case 'x':
    return multiply(num1,num2);
    break;
    case '÷':
    return divide(num1,num2);
    break;
 }
}

// display

function showNumbers (value){
 screenValue.innerText=value;
 if(value===undefined)screenValue.innerText=" ";
}

function showOperation(operator){
 screenOperation.innerText=operator;
}


