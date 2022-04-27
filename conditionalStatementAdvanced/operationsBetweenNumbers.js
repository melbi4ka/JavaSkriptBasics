function operationBetweenNumbers (input) {
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let operation = input[2];
    result = 0

    switch (operation){
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            if (numberTwo === 0){
                console.log(`Cannot divide ${numberOne} by zero`);
            } else {
                result = numberOne / numberTwo;
            }
            break;
        case "%":
            if (numberTwo === 0){
                console.log(`Cannot divide ${numberOne} by zero`);
            } else {
                result = numberOne % numberTwo;
            }
            break;
    }
    if (operation === "+" || operation === "-" || operation === "*"){
        if (result % 2 == 0){
            console.log(`${numberOne} ${operation} ${numberTwo} = ${result} - even`)
        } else {
            console.log(`${numberOne} ${operation} ${numberTwo} = ${result} - odd`)
        }
    } else if (operation === "/" && numberTwo != 0) {
        console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`)
    } else if (operation === "%" && numberTwo != 0){
        console.log(`${numberOne} % ${numberTwo} = ${result}`)
    }
}
operationBetweenNumbers(["7",
"3",
"*"])






