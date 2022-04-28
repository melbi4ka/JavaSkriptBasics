function fishingBoat (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFishermen = Number(input[2]);
    let rentPrice = 0

    switch (season) {
        case "Spring":
            rentPrice = 3000;
            break;
        case "Winter":
            rentPrice = 2600;
            break;
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
            break;
    }
    if (countFishermen <= 6) {
        rentPrice *= 0.9;
    } else if (countFishermen > 7 && countFishermen <= 11) {
        rentPrice *= 0.85;
    } else {
        rentPrice *= 0.75;
    }

    if (countFishermen % 2 == 0 && season != "Autumn"){
        rentPrice *= 0.95;
    }

    diff = Math.abs(budget - rentPrice);
    if (budget >= rentPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
fishingBoat(["3600",
"Autumn",
"6"])





