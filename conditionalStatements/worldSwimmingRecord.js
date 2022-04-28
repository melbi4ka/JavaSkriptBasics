function swimmingRecord(input){
    let swimRecordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsPerMeter = Number(input[2]);

    let swimTime = distanceInMeters * timeInSecondsPerMeter;
    let additionalTime = Math.floor(distanceInMeters/15) * 12.5;
    let totalTime = swimTime + additionalTime;
    let diff = Math.abs(totalTime-swimRecordInSeconds);

    if (swimRecordInSeconds <= totalTime){
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}
swimmingRecord(["55555.67",
"3017",
"5.03"])

