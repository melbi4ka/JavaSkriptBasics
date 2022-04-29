function onTime (input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examHour*60 + examMinute;
    let arrivalTime = arrivalHour*60 + arrivalMinute;
    let difference = examTime - arrivalTime;

    if (difference < 0){
        console.log("Late");
        difference = Math.abs(difference);
        let minutes = difference % 60;
        let hours = Math.floor(difference / 60);
        if (hours > 0) {
            if (minutes >= 10){
                console.log(`${hours}:${minutes} hours after the start`);
            } else {
                console.log(`${hours}:0${minutes} hours after the start`);
            }
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    } else if (difference >= 0 && difference <= 30){
        console.log("On time");
        let mi
        if (difference > 0){
            console.log(`${difference} minutes before the start`);
        }
    } else {
        console.log("Early");
        let minutes = difference % 60;
        let hours = Math.floor(difference / 60);
        if (hours > 0) {
            if (minutes >= 10){
                console.log(`${hours}:${minutes} hours before the start`);
            } else {
                console.log(`${hours}:0${minutes} hours before the start`);
            }
        } else {
            console.log(`${minutes} minutes before the start`);
        }
    }
}
