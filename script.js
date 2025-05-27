function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    if(b===0){
        return false;
    }
    return (a/b).toFixed(7);
}
function operate(first,second,operator){
    switch(operator){
        case "+":
            return add(first,second);
        case "-":
            return subtract(first,second);
        case "*":
            return multiply(first,second);
        case "/":
            return divide(first,second);
        default:
            console.log("use either + - * /");
            
    }
}
function createButtons(){
    const grid = document.querySelector(".grid");
    let symbol = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']
    for(let i=0;i<16;i++){
        const btn = document.createElement('button');
        btn.textContent = symbol[i];
        btn.style.width = "200px";
        btn.style.color = "blue";
        grid.appendChild(btn);
    }
    
}
function clearAll(firstOperand,secondOperand,symbol){
    firstOperand.splice(0,firstOperand.length);
    secondOperand.splice(0,secondOperand.length);
    symbol.splice(0,symbol.length)
}
function updateDisplay(button,text,display){
    text.push(button);
    display.textContent = text.join("");
}
function clearDisplay(text,display){
    text.splice(0,text.length);
    display.textContent = text.join("");
}
function parseValue(arr){
    let a;
    arr.includes(decimal)? a=parseFloat(arr.join("")): a=parseInt(arr.join(""));
    return a;
}


createButtons();
const state = {
    firstOperand: [],
    secondOperand: [],
    isSecondOperand: false,
    symbol: [],
    text: [],
}
const numbers = "0123456789";
const operator = "+-/*";
const decimal = ".";
const firstOperand = [];
const secondOperand = [];
const symbol = [];
const text = [];
let display = document.querySelector(".display");
const btn = Array.from(document.querySelectorAll("button"));
btn.forEach(button=>button.addEventListener("click",(e)=>{
    let button = e.target.textContent;
    if(numbers.includes(button)&&symbol.length===0){
        //checks no operator and assigns to first operand
        firstOperand.push(button);
        updateDisplay(button,text,display);
        
    }else if(numbers.includes(button)){
        //assigns to second operand
        secondOperand.push(button);
        updateDisplay(button,text,display);
    }else if(operator.includes(button)){
        //assigns to operator
        symbol.push(button);
        clearDisplay(text,display)
    }
    if(button===decimal&&firstOperand.length!==0&&symbol.length==0&&!firstOperand.includes(decimal)){
        //checks no operator and that first operand has at least 1 number and adds decimal
        firstOperand.push(decimal);
        updateDisplay(button,text,display);
    }else if(button===decimal&&secondOperand.length!==0&&!secondOperand.includes(decimal)){
        //else checks if second operator has at least 1 number and adds decimal
        secondOperand.push(decimal);
        updateDisplay(button,text,display);
    }
    if(symbol.length>1){
        //computes result if more than two operators used
        if(secondOperand.length==0){
            symbol.splice(0,1);
        }else{
        clearDisplay(text,display);
        let a,b;
        //converts to either float or int
        a = parseValue(firstOperand);
        b = parseValue(secondOperand);
        let operator = symbol[0];
        let nextOperator = symbol[1];
        let result = String(operate(a,b,operator))
        display.textContent = result;
        let arr = result.split("");
        clearAll(firstOperand,secondOperand,symbol)
        //replaces first operand with result
        arr.forEach(item=>firstOperand.push(item));
        symbol.push(nextOperator);
    }
    }
    if(button==="clear"){
        //resets everything
        clearAll(firstOperand,secondOperand,symbol)
        clearDisplay(text,display);

    }
    if(button==="="){
        clearDisplay(text,display);
        let a,b;
        a = parseValue(firstOperand);
        b = parseValue(secondOperand);
        let result = operate(a,b,symbol.join(""));
        if(result===false){
            display.textContent = "You can't divide a number by zero!";
            clearAll(firstOperand,secondOperand,symbol)
        }else{
            display.textContent = String(result);
            clearAll(firstOperand,secondOperand,symbol);
        }
        
        
    }
    
    }));







