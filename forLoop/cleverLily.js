function cleverLily (input){
    let index = 0;
    let ageLily = Number(input[index]);
    index++;
    let laudryPrice = Number(input[index]);
    index++;
    let toyPrice = Number(input[index]);
    let money = 0;
    let toyCount = 0;
    let restMoney = 0;
    
    for (let i = 1; i<= ageLily; i++){
        if (i % 2 === 0){
            money += 10
            restMoney += money - 1
        } else {
            toyCount++;
        }
    }
    let totalMoney = restMoney + toyCount * toyPrice;
    let diff = Math.abs(totalMoney - laudryPrice)
    if (laudryPrice <= totalMoney){
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
cleverLily(["21",
"1570.98",
"3"])

