function sumSeconds (input) {

    let firstSwimerSec = Number(input[0]);
    let secondSwimerSec = Number(input[1]);
    let thirdSwimerSeconds = Number(input[2]);

    let allSwimmerSeconds = firstSwimerSec + secondSwimerSec + thirdSwimerSeconds;
    let allSwimmerMinutes = Math.floor(allSwimmerSeconds / 60);
    let allSwimmerTotalSeconds = allSwimmerSeconds % 60;

    if (allSwimmerTotalSeconds >= 10) {
        console.log(`${allSwimmerMinutes}:${allSwimmerTotalSeconds}`);

    } else {
        console.log(`${allSwimmerMinutes}:0${allSwimmerTotalSeconds}`);
    }   
} 
