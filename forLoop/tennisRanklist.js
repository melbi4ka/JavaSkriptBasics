function tennisRanklist(input){
    let index = 0;
    let tournamentsCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let wins = 0;
    let newPoints = 0;

    for (let i = 0; i < tournamentsCount; i++){
        let stageTournament = input[index];
        index++;
        switch (stageTournament){
            case "W":
                startPoints += 2000;
                newPoints += 2000;
                wins++;
                break;
            case "F":
                startPoints += 1200;
                newPoints += 1200;
                break;
            case "SF":
                startPoints += 720;
                newPoints += 720;
                break;
        }
    }
    let averagePerTournament = Math.floor(newPoints / tournamentsCount);
    let winPercent = wins / tournamentsCount * 100
    console.log(`Final points: ${startPoints}`);
    console.log(`Average points: ${averagePerTournament}`)
    console.log(`${winPercent.toFixed(2)}%`)
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])



