const calcButton = document.querySelectorAll('.calc-btn');
window.addEventListener('keydown', pressNum);
let storedInput = document.querySelector('.input-1');
let currentInput = document.querySelector('.input-2');
storedInput.textContent = '';
currentInput.textContent = "0";
let result = 0;
let op = false;
calcButton.forEach(button => button.addEventListener('click',function(){
    clickNum(button);
}));

function clickNum(btn){
    if((currentInput.textContent).length === 9) return;
    if(btn.textContent === "0" || btn.textContent === "1" || btn.textContent === "2" || btn.textContent === "3" ||
        btn.textContent === "4" || btn.textContent === "5" || btn.textContent === "6" || btn.textContent === "7" ||
        btn.textContent === "8" || btn.textContent === "9"){
            if(currentInput.textContent === "0"){
                currentInput.textContent = btn.textContent; 
            } 
            else {
                if(op === true){
                    currentInput.textContent = btn.textContent; 
                    op = false;
                }else{
                    currentInput.textContent += btn.textContent;
                }
            }
    }else if(btn.textContent === "clear"){
        currentInput.textContent = "0";
        storedInput.textContent = "";
    }else if(btn.textContent === "del"){
        if((currentInput.textContent).length > 1) currentInput.textContent = 
            (currentInput.textContent).slice(0,(currentInput.textContent).length-1);
        else currentInput.textContent = "0";
    }else if(btn.textContent === "+"){
        if(op === true) return;
        op = true;
        if(storedInput.textContent === ""){
            storedInput.textContent = `${currentInput.textContent} +`;
        }else{
            let tempInput = (storedInput.textContent).slice(0,(storedInput.textContent).length-2);
            result = addition(parseInt(tempInput), parseInt(currentInput.textContent));
            storedInput.textContent = `${result} +`;
            currentInput.textContent = result;
        }
    }
    
}

function pressNum(e){
    const btn = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!btn){
        return;
    }else{
        clickNum(btn);
    }
}

function operate(){
    for(;;){
        let operation = prompt("Choose operation: add, subtract, multiply, divide", '');
        if(operation === 'add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide'){
            let firstNum = prompt("Input first number", 0);
            let secondNum = prompt("Input second number", 0);
            firstNum = parseInt(firstNum);
            secondNum = parseInt(secondNum);

            if(operation === 'add')
                alert(`${firstNum} + ${secondNum} = ${addition(firstNum,secondNum)}`);
            else if(operation === 'subtract')
                alert(`${firstNum} - ${secondNum} = ${subtraction(firstNum,secondNum)}`);
            else if(operation === 'multiply')
                alert(`${firstNum} x ${secondNum} = ${multiplication(firstNum,secondNum)}`);
            else if(operation === 'divide')
                alert(`${firstNum} / ${secondNum} = ${division(firstNum,secondNum)}`);
        }else{
            alert("Unknown operator.");
        }
    }
}

function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

