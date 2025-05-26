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

createButtons();
const numbers = "0123456789";
const operator = "+-/*";
const firstOperand = [];
const secondOperand = [];
const symbol = [];
const text = [];
let display = document.querySelector(".display");
const btn = Array.from(document.querySelectorAll("button"));
btn.forEach(button=>button.addEventListener("click",(e)=>{
    if(numbers.includes(e.target.textContent)&&symbol.length===0){
        firstOperand.push(e.target.textContent);
        text.push(e.target.textContent);
        display.textContent = text.join("");
    }else if(numbers.includes(e.target.textContent)){
        secondOperand.push(e.target.textContent);
        text.push(e.target.textContent);
        display.textContent = text.join("");
    }
    if(operator.includes(e.target.textContent)){
        symbol.push(e.target.textContent);
        text.splice(0,text.length);
        display.textContent = text.join("");
    }
    if(symbol.length>1){
        if(secondOperand.length==0){
            symbol.splice(0,1);
        }else{
        console.log(symbol);
        text.splice(0,text.length);
        display.textContent = text.join("");
        let a = parseInt(firstOperand.join(""));
        let b = parseInt(secondOperand.join(""));
        let operator = symbol[0];
        let result = String(operate(a,b,operator))
        display.textContent = result;
        firstOperand.splice(0,firstOperand.length,String(result));
        secondOperand.splice(0,secondOperand.length);
        symbol.splice(0,1);
    }
    }
    if(e.target.textContent==="clear"){
        text.splice(0,text.length);
        display.textContent = text.join("");
        firstOperand.splice(0,firstOperand.length);
        secondOperand.splice(0,secondOperand.length);
        symbol.splice(0,symbol.length);

    }
    if(e.target.textContent==="="){
        text.splice(0,text.length);
        display.textContent = text.join("");
        let a = parseInt(firstOperand.join(""));
        let b = parseInt(secondOperand.join(""));
        console.log(`first ${a}`);
        console.log(`second ${b}`);
        console.log(symbol.join(""));
        let result = operate(a,b,symbol.join(""));
        console.log(`result ${result}`);
        if(result===false){
            display.textContent = "You can't divide a number by zero!";
            firstOperand.splice(0,firstOperand.length);
            secondOperand.splice(0,secondOperand.length);
            symbol.splice(0,symbol.length);
        }else{
            display.textContent = String(result);
            firstOperand.splice(0,firstOperand.length);
            secondOperand.splice(0,secondOperand.length);
            symbol.splice(0,symbol.length);
        }
        //need to do error for symbol>1
        
    }
    
    }));







