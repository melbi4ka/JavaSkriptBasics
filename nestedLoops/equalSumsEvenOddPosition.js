function equalSum (input){
    let numberOne = Number(input[0]);
    let numberTwo = Number(input[1]);
    let finalNums = "";

    for (let i = numberOne; i <= numberTwo; i++){
        let oddDigitSum = 0;
        let evenDigitSum = 0;
        let num = String(i);
        

        for (j = 0; j < num.length; j++){
            let digit = Number(num[j]);

            if (j % 2 == 0){
                evenDigitSum += digit
            } else {
                oddDigitSum += digit
            }
        }
        if (evenDigitSum === oddDigitSum){
            finalNums += i + " "
        }
    }
    console.log(finalNums)
}
equalSum(["299900",
"300000"])

