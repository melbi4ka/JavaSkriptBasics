function numberPyramid (input) {
    let n = Number(input[0]);
    let current = 1;
    let isbiggerThanN = false;
    let printCurrentLine = "";

    for (let row = 1; row<= n; row++){
        for (let col = 1; col <= row; col++){
            if (current > n) {
                isbiggerThanN = true;
                break; 
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isbiggerThanN){
            break;
        }
    }
}
