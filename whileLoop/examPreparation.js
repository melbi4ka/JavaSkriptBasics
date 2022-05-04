function examPreparation (input) {
    let index = 0;
    let badGrades = Number(input[index]);
    index++;
    
    let badGradeCounter = 0;
    let taskCounter = 0;
    let sumGrades = 0;
    let lastTask = "";
    let isEjected = false;

    let taskName = input[index];
    index++;
    
    while (taskName !== "Enough"){
        let grade = Number(input[index]);
        index++;
        if (grade <= 4){
            badGradeCounter++;
            if (badGradeCounter === badGrades){
                isEjected = true;
                break
            }
        }
        taskCounter++;
        sumGrades += grade;
        lastTask = taskName;
        taskName = input[index];
        index++;
    }
    switch (isEjected){
        case false:
            let averageGrade = sumGrades / taskCounter
            console.log(`Average score: ${averageGrade.toFixed(2)}`)
            console.log(`Number of problems: ${taskCounter}`)
            console.log(`Last problem: ${lastTask}`)
            break;
        case true:
            console.log(`You need a break, ${badGradeCounter} poor grades.`)
            break; 
    }
}
