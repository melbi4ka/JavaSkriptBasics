function multiplicationTable (input){
    let index = 0;
    let n = Number(input[index]);
    index++;

    for (let i=1; i<=10; i++){
        res = i * n 
        console.log(i+" * "+n+" = "+res);
    }
}
