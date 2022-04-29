function timeMinutes (input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1])

    let hoursToMinutes = hour * 60;
    let totalMinutes = hoursToMinutes + minutes + 15;
    let finalHours = Math.floor(totalMinutes/60);
    let finalMinutes = totalMinutes % 60;
    if (finalHours === 24) {
        finalHours = 0;
    }
    if (finalMinutes >=10) {
        console.log(`${finalHours}:${finalMinutes}`);
    } else {
        console.log(`${finalHours}:0${finalMinutes}`);
    }

}

timeMinutes(["12", "49"])