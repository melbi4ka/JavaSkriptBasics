function oldBooks (input){
    let index = 0;
    let searchedBook = input[index]; 
    index++;

    let command = input[index];
    index++;
    let bookCounter = 0;
    let isFound = false;

    while (command !== "No More Books"){
        if (command === searchedBook){
            isFound = true;
            break;
        }
        bookCounter++;
        command = input[index];
        index++; 
    }
    switch (isFound){
        case false:
            console.log("The book you search is not here!")
            console.log(`You checked ${bookCounter} books.`)
            break;
        case true:
            console.log(`You checked ${bookCounter} books and found it.`)
            break;
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
