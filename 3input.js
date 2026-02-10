const r1=require("readline").createInterface({ //yahi tareeka hai terminal se
    input: process.stdin, 
    output: process.stdout,
});

//ye terminal se user input lene ka tareeka as prompt is user for browser input
r1.question("Enter something: ",
    (answer) => {
        console.log("You entered: ", answer);
        r1.close();
    });
//r1.close();  //asynchronous programming ka example hai ye as isme pehle close run ho jaa rha bcoz .question time lega zyada
//isliye r1.close() ko andar hi call krdenge taaki sequence mein chale 