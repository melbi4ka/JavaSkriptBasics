function cinema (input) {
    let filmType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = rows * columns;
    if (filmType === "Premiere"){
        income *= 12;
    } else if (filmType === "Normal"){
        income *= 7.50;
    } else if (filmType === "Discount"){
        income *= 5;
    }
    console.log(`${income.toFixed(2)} leva`)
}
