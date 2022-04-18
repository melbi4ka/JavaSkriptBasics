function shopping (input){
    let budget = Number(input[0]);
    let numberVideocards = Number(input[1]);
    let numberProcessors = Number(input[2]);
    let numberRamCards = Number(input[3]);

    let totalPrice = numberVideocards*250 + 0.35*(numberVideocards*250)*numberProcessors + 0.1*(numberVideocards*250)*numberRamCards
    if (numberVideocards > numberProcessors){
        totalPrice *= 0.85;
    }
    let diff = Math.abs(budget - totalPrice)
    if (budget >= totalPrice){
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    }else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
