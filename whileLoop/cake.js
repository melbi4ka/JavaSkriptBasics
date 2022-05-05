function cake (input){
    let index = 0;
    let sideA = Number(input[index]);
    index++;
    let sideB = Number(input[index]);
    index++;

    let cakePieces = sideA * sideB;
    let isLeftOver = false;

    while (cakePieces > 0){
        let command = input[index];
        index++;
        if (command === "STOP"){
            isLeftOver = true;
            break;
        } else {
            let gestPieces = Number(command);
            cakePieces -= gestPieces;
        }
    }
    cakePieces = Math.abs(cakePieces);
    switch (isLeftOver){
        case true:
            console.log(`${cakePieces} pieces are left.`)
            break;
        case false:
            console.log(`No more cake left! You need ${cakePieces} pieces more.`)
            break;
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

