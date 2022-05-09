function trainTheTrainers (input) {
    index = 0;
    let juriNumbers = Number(input[index]);
    index++;
    command = input[index];
    index ++;
    let sumAverageGrade = 0;
    let presentationCounter = 0

    while (command !== "Finish"){
        let presentationName = command;
        let sumGrade = 0;
        presentationCounter += 1;

        for (let i = 0; i< juriNumbers; i++){
            let grade = Number(input[index]);
            index++;
            sumGrade += grade;
        }
        let averageGrade = sumGrade / juriNumbers;
        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`)
        sumAverageGrade += averageGrade;
        
        command = input[index];
        index++;
    }
    let finalAssessment = sumAverageGrade / presentationCounter
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


