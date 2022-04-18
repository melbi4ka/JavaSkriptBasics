function godzilaVsKong (input){

    let filmBudget = Number(input[0]);
    let numberActors = Number(input[1]);
    let clothPricePerActor = Number(input[2]);

    let decorPrice = filmBudget * 0.10;
    let totalSum = decorPrice + numberActors * clothPricePerActor;

    if (numberActors > 150){
        totalSum = decorPrice + numberActors * clothPricePerActor*0.9;
    }
    let diff = Math.abs(totalSum - filmBudget);
    if (totalSum > filmBudget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
    

}

godzilaVsKong(["20000",
"120",
"55.5"])


