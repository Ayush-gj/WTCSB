//write a js program to make a calculator and should return all the functions as objects


// const calculator=() =>({
//     add: (a,b) => a+b,
//     sub: (a,b) => a-b,
//     mul: (a,b) => a*b,
//     div: (a,b) => (b==0 ? "Error aa gyi":a/b),
// });

// console.log(calculator().add(11,5));
// console.log(calculator().sub(10,5));
// console.log(calculator().mul(11,5));
// console.log(calculator().div(11,1));
// console.log(calculator().div(11,0));


const calculator=() => {
    const calc=(op,a,b) => {
        switch(op){
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                return b !== 0 ? a / b : "Error: Division by zero";
            default:
                return "Invalid operation";
        }
    };

    return { calc };
};

const myCalc = calculator();

console.log(myCalc.calc("add", 5, 3));       
console.log(myCalc.calc("subtract", 10, 4)); 
console.log(myCalc.calc("multiply", 7, 2));  
console.log(myCalc.calc("divide", 20, 5));   
console.log(myCalc.calc("modulus", 10, 3));  
console.log(myCalc.calc("power", 2, 3));     
console.log(myCalc.calc("max", 9, 15));      
console.log(myCalc.calc("min", 9, 15));      
