function skiTrip (input){
    let daysTrip = Number(input[0]) - 1;
    let typeRoom = input[1];
    let review = input[2];
    let price = 0;

    switch (typeRoom){
        case "room for one person":
            price = 18;
            break;
        case "apartment":
            if (daysTrip < 9){
                price = 25 * 0.70;
            } else if (daysTrip >= 9 && daysTrip <=14){
                price = 25 * 0.65;
            } else if (daysTrip > 14){
                price = 25 * 0.5;
            }
            break;
        case "president apartment":
            if (daysTrip < 9){
                price = 35 * 0.90;
            } else if (daysTrip >= 9 && daysTrip <=14){
                price = 35 * 0.85;
            } else if (daysTrip > 14){
                price = 35 * 0.80;
            }
            break;
    }
    if (review === "positive"){
        price *= 1.25;
    } else if (review === "negative"){
        price *= 0.9
    }
    let totalPrice = price * daysTrip
    console.log(totalPrice.toFixed(2))
}
skiTrip(["2",
"apartment",
"positive"])


