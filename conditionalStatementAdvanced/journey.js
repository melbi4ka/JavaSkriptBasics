function journey (input){
    let budget = Number(input[0]);
    let season = input[1];
    let typeVacation = "";
    let destination = ""


    switch (season){
        case "summer":
            typeVacation = "Camp";
            break;
        case "winter":
            typeVacation = "Hotel";
            break;
    }
    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "summer") {
            budget *= 0.3
        } else {
            budget *= 0.7
        }
    } else if (budget > 100 && budget <= 1000){
        destination = "Balkans";
        if (season === "summer") {
            budget *= 0.4
        } else {
            budget *= 0.8
        }
    } else {
        destination = "Europe";
        typeVacation = "Hotel";
        budget *= 0.9
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${typeVacation} - ${budget.toFixed(2)}`)
}
