function oscars (input){
    let index = 0;
    let actor = input[index];
    index++;
    let firstPoints = Number(input[index]);
    index++;
    let juriNumbers = Number(input[index]);
    index++;
    let isNominated = false;
    

    for (let i = 0; i < juriNumbers; i++){
        let juriName = input[index];
        index++; 
        let juriPoints = Number(input[index]);
        index++;
        firstPoints += (juriName.length * juriPoints) / 2;

        if (firstPoints >= 1250.5){
            isNominated = true;
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${firstPoints.toFixed(1)}!`);
            break;
        }
    }
    let diff = Math.abs(firstPoints - 1250.5)
    if (!isNominated){
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
