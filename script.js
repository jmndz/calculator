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

operate();