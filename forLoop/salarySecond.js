function income (input){
    index = 0;
    let openTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let isHaveSalary = true

    for (let i = 0; i < openTabs; i++){
        let website = input[index];
        index ++;
        switch (website){
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;         
        }
        if (salary <= 0){
            isHaveSalary = false
            console.log("You have lost your salary.")
            break;
        }
    }
    if (isHaveSalary){
        console.log(salary)
    }  
}
