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
    return a/b;
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
    let symbol = ['7','8','9','/','4','5','6','x','1','2','3','-','0','.','=','+']
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
const operator = "+-/x";
const text = [];
let display = document.querySelector(".display");
const btn = Array.from(document.querySelectorAll("button"));
btn.forEach(button=>button.addEventListener("click",(e)=>{
    if(e.target.textContent==="clear"){
        text.splice(0,text.length);
        display.textContent = text.join("");
    }else{
        text.push(e.target.textContent);
        display.textContent = text.join("");
    }
    
    }));







