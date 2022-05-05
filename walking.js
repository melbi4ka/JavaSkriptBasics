function walking (input){
    index = 0;
    let command = input[index];
    index++;
    let allSteps = 0;
    let goalIsReached = false;

    while (command !== "Going home"){
        let steps = Number(command);
        allSteps += steps
        if (allSteps >= 10000){
            goalIsReached = true;
            break;
        }
    command = input[index];
    index++;
    }
    if (command === "Going home"){
        let lastSteps = Number(input[index]);
        index++;
        allSteps += lastSteps;
        if (allSteps >= 10000){
            goalIsReached = true;
        }
    }
    let diff = Math.abs(allSteps - 10000);
    switch (goalIsReached){
        case false:
            console.log(`${diff} more steps to reach goal.`)
            break;
        case true:
            console.log("Goal reached! Good job!")
            console.log(`${diff} steps over the goal!`)
            break;
    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



