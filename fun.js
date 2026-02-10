// (function show(){
//     console.log("Welcome to CSB")
// })();

// ye anonymous function hai niche

() => {
    console.log("Hello")
}
// () => {
//     console.log("Hello")
// }

// (() => {
//     console.log("Hello")
// })();

// const aa= () => {
//     console.log("HI")
// };
// aa();
function person(){
    this.age=25;

    setTimeout(function (){
        console.log(this.age);
    }, 1000);
}
new person();
// function person(){
//     this.age=25;

//     setTimeout(function (){
//         console.log(this.age);
//     }, 1000);
// }
// new person();


// function person(){
//     this.age=25;

//     setTimeout(() => {
//         console.log(this.age);
//     }, 1000);
// }
// new person();