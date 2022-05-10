function cinemaTickets (input){
    index = 0;
    let command = input[index];
    index++;
    let studentTicketCounter = 0;
    let standartTicketCounter = 0;
    let kidsTicketCounter = 0;
    let totalTicketCounter = 0;

    while (command != "Finish"){
        let freeSeats = input[index];
        index++;
        let currentCommand = input[index];
        index++;
        let totalSeats = freeSeats;
        let soldTickets = 0;
        
        while (currentCommand != "End"){
            let typeTicket = currentCommand;
            freeSeats--;
            soldTickets++;
            totalTicketCounter++;

            if (typeTicket === "standard"){
                standartTicketCounter += 1;
            } else if (typeTicket === "kid"){
                kidsTicketCounter += 1;
            } else if (typeTicket === "student"){
                studentTicketCounter += 1
            }
            if (freeSeats === 0){
                break;
            }
            //freeSeats--;
            currentCommand = input[index];
            index++; 
        }
        let fullnes = (soldTickets/totalSeats) * 100
        console.log(`${command} - ${fullnes.toFixed(2)}% full.`);
        command = input[index];
        index++;       
    }
    console.log(`Total tickets: ${totalTicketCounter}`)
    console.log(`${((studentTicketCounter/totalTicketCounter)*100).toFixed(2)}% student tickets.`)
    console.log(`${((standartTicketCounter/totalTicketCounter)*100).toFixed(2)}% standard tickets.`)
    console.log(`${((kidsTicketCounter/totalTicketCounter)*100).toFixed(2)}% kids tickets.`)
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
