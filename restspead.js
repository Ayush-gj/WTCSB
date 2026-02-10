// function add(a,b,c){
//     return a+b+c;
// }

// //console.log(add(1,2,3,4,5));
// console.log(add(1));

function add(...numbers){  // rest operator (... literal) agar aise likhenge to wo use multiple input ko array mein convert krdega fir ham (1,2,3,4,5) iss tarah se bhi pass kr skte value
    let total=0;
    //for(let i=0;i<numbers.length;i++){ // ek ye for loop hai abb ek aur
    //for( let i in numbers){ // ek ye wala for loop iske alawa ek aur hai usme of use krte hain
    for(let i of numbers){ // of ki wajah se wo directly uss index ki value uthaayega means no numbers[i] but only i
        total=total+i;
    }
    return total;
}

//console.log(add(1,2,3,4,5));
//  output 0 aa rha isse bcoz pehle value 1 gyi to i=0 hai which i<1 jo ki glt to total=0 hi rha aur loop wahin terminate

//console.log(add([1,2,3,4,5]));
console.log(add(1,2,3,4,5));

console.log();

let a=[1,2,45,6,3,21];
let[first,sec,...last] = a;
console.log(first,sec,last); // isse bas starting teen ab use krenge rest operator
console.log(first,sec,...last);


let arr1=[10,20,30];
let arr2=[...arr1]; // ... same yahi operator acts as spread mtln ye ek array ko integers mein bhi tod dega
console.log(arr2);


function test(...args){
    console.log(args);
}
let arr=[1,2,3];
test(...arr);

// ...args spread 

// Q1
const isEven = (a) => {
    if(a%2==0)
        console.log("Even");
    else
        console.log("Odd");
};
isEven(7);



// Q2
const reverseString=(str) => {
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    console.log(rev);
}
reverseString("dssa");


// Q3
const averageMarks=(...nums) => {
    let sum=0;
    for(let i of nums){
        sum=sum+i;
    }
    let avg=sum/nums.length;
    if(avg >= 40)
        console.log("Pass");
    else
        console.log("Fail");
}
averageMarks(10,5,10,2);
//console.log(averageMarks(10,5,10,2));