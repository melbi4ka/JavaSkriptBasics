function trekkingMania (input){
    let index = 0;
    let groups = Number(input[index]);
    index++;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let peopleCount = 0;

    for (let i = 0; i < groups; i++){
        let groupCount = Number(input[index]);
        index++;
        peopleCount += groupCount;
        if (groupCount <= 5){
            musala += groupCount;
        } else if (groupCount >= 6 && groupCount <= 12){
            monblan += groupCount;
        } else if (groupCount >= 13 && groupCount <= 25){
            kilimandjaro += groupCount;
        } else if (groupCount >= 26 && groupCount <= 40){
            k2 += groupCount;
        } else if (groupCount >= 41){
            everest += groupCount;
        }
    }
    let percentMusala = musala/peopleCount * 100;
    let percentMonblan = monblan/peopleCount * 100;
    let percentKilimandjaro = kilimandjaro/peopleCount * 100;
    let percentK2 = k2 / peopleCount * 100;
    let percentEverest = everest / peopleCount * 100;
    console.log(percentMusala.toFixed(2) + "%")
    console.log(percentMonblan.toFixed(2) + "%")
    console.log(percentKilimandjaro.toFixed(2) + "%")
    console.log(percentK2.toFixed(2) + "%")
    console.log(percentEverest.toFixed(2) + "%")
}
