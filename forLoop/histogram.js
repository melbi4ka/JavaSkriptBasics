function histogram (input){
    let index = 0;
    let n = Number(input[index]);
    index ++;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0; 
    let p5 = 0;

    for (let i = 0; i<n; i++){
        let num = Number(input[index]);
        index ++;
        if (num < 200){
            p1++;
        } else if (num >= 200 && num <= 399){
            p2++;
        } else if (num >= 400 && num <= 599){
            p3++;
        } else if (num >= 600 && num <= 799){
            p4++;
        } else if (num >= 800){
            p5++;
        }
    }
    let res1 = p1/n * 100;
    let res2 = p2/n * 100;
    let res3 = p3/n * 100;
    let res4 = p4/n * 100;
    let res5 = p5/n * 100;
    console.log(`${res1.toFixed(2)}%`)
    console.log(`${res2.toFixed(2)}%`)
    console.log(`${res3.toFixed(2)}%`)
    console.log(`${res4.toFixed(2)}%`)
    console.log(`${res5.toFixed(2)}%`)
}
