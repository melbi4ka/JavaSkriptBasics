function toyShop (input) {
    let tripPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let allPrice = puzzle * 2.6 + doll * 3 + bears * 4.10 +
    minions * 8.20 + trucks * 2
    let countToys = puzzle + doll + bears + minions + trucks 
    if (countToys >= 50) {
        allPrice *= 0.75 
    }
    allPrice *= 0.9
    diff = Math.abs(allPrice - tripPrice)
    if (allPrice >= tripPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
    

}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

