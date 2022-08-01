const calcButton = document.querySelectorAll('.calc-btn');
window.addEventListener('keydown', pressNum);
let storedInput = document.querySelector('.input-1');
let currentInput = document.querySelector('.input-2');
storedInput.textContent = '';
currentInput.textContent = "0";
calcButton.forEach(button => button.addEventListener('click',function(){
    clickNum(button);
}));

function clickNum(btn){
    if(currentInput.textContent === "0"){
        currentInput.textContent = btn.textContent;
    }else{
        if(btn.textContent == 0 || btn.textContent == 1 || btn.textContent == 2 || btn.textContent == 3 ||
            btn.textContent == 4 || btn.textContent == 5 || btn.textContent == 6 || btn.textContent == 7 ||
            btn.textContent == 8 || btn.textContent == 9){
                currentInput.textContent += btn.textContent;
        }
    }
    
}

function pressNum(e){
    const btn = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!btn){
        return;
    }else{
        if(currentInput.textContent === "0"){
            currentInput.textContent = btn.textContent;
            console.log(currentInput.textContent+ " " +btn.textContent);
        }else{
            if(btn.textContent == 0 || btn.textContent == 1 || btn.textContent == 2 || btn.textContent == 3 ||
                btn.textContent == 4 || btn.textContent == 5 || btn.textContent == 6 || btn.textContent == 7 ||
                btn.textContent == 8 || btn.textContent == 9){
                    currentInput.textContent += btn.textContent;
            }
        }
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

