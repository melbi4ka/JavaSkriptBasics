function newHouse (input){
    let typeFlowers = input[0];
    let numberFlowers = Number(input[1]);
    let budget = input[2];
    
    let totalSum = 0;
    switch (typeFlowers){
        case "Roses":
            totalSum = numberFlowers * 5;
            if (numberFlowers > 80){
                totalSum *= 0.9;
            }
            break;
        case "Dahlias":
            totalSum =  numberFlowers * 3.8;
            if (numberFlowers > 90){
                totalSum *= 0.85;
            }
            break;
        case "Tulips":
            totalSum = numberFlowers * 2.8;
            if (numberFlowers > 80){
                totalSum *= 0.85;
            }
            break;
        case "Narcissus":
            totalSum = numberFlowers * 3;
            if (numberFlowers < 120){
                totalSum *= 1.15;
            }
            break;
        case "Gladiolus":
            totalSum = numberFlowers * 2.5;
            if (numberFlowers < 80){
                totalSum *= 1.20;
            }
            break;
    }
    diff = Math.abs(budget - totalSum)
    if (budget >= totalSum){
        console.log(`Hey, you have a great garden with ${numberFlowers} ${typeFlowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}
