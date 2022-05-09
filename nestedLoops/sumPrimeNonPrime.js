function sumPrime (input) {
    let index = 0;
    let command = input[index];
    index++; 
    let primeSum = 0;
    let nonPrimeSum = 0

    while (command !== "stop"){
        let currentNumber = Number(command);
        let primeNumber = true;

        if (currentNumber < 0){
            console.log("Number is negative.");
        } else if (currentNumber == 1) {
            primeNumber = false;
        } else {
            for (let i = 2; i <= currentNumber; i++){
                if (currentNumber % i == 0 && i != currentNumber){
                    primeNumber = false;
                    break;
                }
            }
            if (primeNumber){
                primeSum += currentNumber;
            } else {
                nonPrimeSum += currentNumber;
            }
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}
