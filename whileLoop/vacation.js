function vacation (input){
    let index = 0;
    let vacationMoney = Number(input[index]);
    index++;
    let neededMoney = Number(input[index]);
    index++;

    let spendCounter = 0;
    let days = 0;

    while (neededMoney < vacationMoney && spendCounter < 5) {
        let command = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        days++;

        switch (command){
            case "spend":
                neededMoney -= money;
                spendCounter++;
                if (neededMoney < 0){
                    neededMoney = 0;
                }
                break;
            case "save":
                neededMoney += money;
                spendCounter = 0
                break;    
        }
     }
    if (spendCounter === 5){
        console.log("You can't save the money.")
        console.log(days)
    } else if (neededMoney >= vacationMoney){
        console.log(`You saved the money for ${days} days.`)
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


