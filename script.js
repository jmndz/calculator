const calcButton = document.querySelectorAll('.calc-btn');
window.addEventListener('keydown', pressNum);
let storedInput = document.querySelector('.input-1');
let currentInput = document.querySelector('.input-2');
storedInput.textContent = '';
currentInput.textContent = "0";
let result = 0;
let op = false;
let tempInput = 0;
let tempOperator = "";
calcButton.forEach(button => button.addEventListener('click',function(){
    operate(button);
}));

function operate(btn){
    if(btn.textContent === "."){
        console.log(currentInput.textContent.indexOf('.') !== -1);
        if(currentInput.textContent.indexOf('.') === -1) currentInput.textContent += btn.textContent;
        else return;
    }
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
    }else if(btn.textContent === "+" || btn.textContent === "-" || btn.textContent === "*" || btn.textContent === "/"){
        if(op === true){
            storedInput.textContent = `${(storedInput.textContent).slice(0,(storedInput.textContent).length-2)} ${btn.textContent}`;
            return;
        }
        operator(btn);
    }else if(btn.textContent === "="){
        if(storedInput.textContent === "" || (op === true)) return;
        operator(btn);
        op = false;
    }
    
}

function operator(btn){
    op = true;
    if(storedInput.textContent === ""){
        storedInput.textContent = `${currentInput.textContent} ${btn.textContent}`;
    }else{
        tempInput = (storedInput.textContent).slice(0,(storedInput.textContent).length-2);
        tempOperator = (storedInput.textContent).slice((storedInput.textContent).length-1);
        console.log(`${tempInput} ${tempOperator} ${currentInput.textContent}`);
        if(tempOperator === "+"){
            result = addition(parseInt(tempInput), parseInt(currentInput.textContent));
        }else if(tempOperator === "-"){
            result = subtraction(tempInput, currentInput.textContent);
        }else if(tempOperator === "*"){
            result = multiplication(tempInput, currentInput.textContent);
        }else if(tempOperator === "/"){
            if(currentInput.textContent === "0"){
                alert("You cannot divide by 0!");
                return;
            } 
            else result = division(tempInput, currentInput.textContent);
        }
        console.log(toString(result).indexOf('.') !== -1);
        if(toString(result).includes('.') !== -1) result = Math.round(result * 10000)/10000;
        if(btn.textContent === "="){
            storedInput.textContent = `${storedInput.textContent} ${currentInput.textContent} ${btn.textContent}`;
            currentInput.textContent = result;
            return;
        }
        storedInput.textContent = `${result} ${btn.textContent}`;
        currentInput.textContent = result;
    }
}


function pressNum(e){
    const btn = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!btn){
        return;
    }else{
        operate(btn);
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