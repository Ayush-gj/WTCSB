// setTimeout(() => {
//     console.log('Hello World');
// },4000);
// let count = 0;
// setInterval(() => {
//     console.log('Hello World');
//     count++;
//     if(count == 5){
//         clearInterval();
//     }
// },2000);
// function roll(num, delay, next) {
//     setTimeout(() => {
//         console.log("Roll no is : " + num);
//         if (next) {
//             next();
//         }
//     }, delay);
// }

// roll(12212, 2000, () => {
//     console.log("Wait its downloading");
//     roll(34234, 3000, () => {
//         console.log("Wait its downloading");
//         roll(23423, 1000, () => {
//             console.log("Wait its downloading");
//             roll(45678, 2500);
//         });
//     });
// });


let uiTeam = ["Deepanshu", "Rohit", "Satyarth"];
let flutterTeam = ["Ankit", "Rishabh", "Ayush"];
function showMenu(uiTeam, flutterTeam) {
    console.log("UI Team: " + uiTeam);
    console.log("Flutter Team: " + flutterTeam);
    console.log("Merger team : ",...uiTeam,...flutterTeam);
}
showMenu(uiTeam, flutterTeam);