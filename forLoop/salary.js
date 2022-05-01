function salary (input){
    index = 0;
    let openTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    for (let i = 0; i < openTabs; i++){
        let website = input[index];
        index ++;
        if (website === "Facebook"){
            salary -= 150;
        } else if (website === "Instagram"){
            salary -= 100;
        } else if (website === "Reddit"){
            salary -= 50
        }
        if (salary <= 0){
            console.log("You have lost your salary.")
            break;
        }
    }
    if (salary > 0){
        console.log(salary)
    }  
}
