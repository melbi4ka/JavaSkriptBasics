function lunchBreak (input){
    let serialName = input[0];
    let timeForEpisode = input[1];
    let timeForRest = input[2];

    let timeForLunch = timeForRest * 1/8
    let timeForBreak = timeForRest * 1/4
    let freeTime = timeForRest - timeForLunch - timeForBreak
    let diff = Math.abs(freeTime - timeForEpisode)

    if (freeTime >= timeForEpisode){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(diff)} minutes free time.`)
    }else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(diff)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])

