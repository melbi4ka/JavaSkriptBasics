function moving(input) {
    let index = 0;
    let sideA = Number(input[index]);
    index++;
    let sideB = Number(input[index]);
    index++;
    let sideC = Number(input[index]);
    index++;

    let volume = sideA * sideB * sideC; 
    let isMoreVolume = false;

    while (volume > 0){
        let command = input[index];
        index++;

        if (command === "Done"){
            isMoreVolume = true;
            break;
        } else {
            let baggage = Number(command);
            volume -= baggage;
        }
    }
    volume = Math.abs(volume);
    switch (isMoreVolume) {
        case true:
            console.log(`${volume} Cubic meters left.`);
            break;
        case false:
            console.log(`No more free space! You need ${volume} Cubic meters more.`);
            break;
    }
}
moving([10, 10, 2, 20, 20, 20, 20, 122])


