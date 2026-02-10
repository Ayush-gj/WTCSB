const student ={
    name : "Ayush",
    age : 20,
    address :{
        city : "Ghaziabad",
        state : "UP"
    }
}

//ye to ek tareeka but mujhe alag alag baaar console krna pad rha
// const name=student.name;
// const age=student.age;

//ye hai destructuring krna
//const {name,age}=student;

//and if we want ki name nhi kuch aur variable lun then
// const {name : stuname,age}=student;
// console.log(stuname,age);

//agar address bhi krna print with naya variable
// const {name: stuname="Amit",age,address :{city}}=student;
// console.log(stuname,age,city);
//ye Amit value tab aayegi agar object ke andar usko name nhi milega like a new user to usne apna jo name likha wo aagya rather than jo names pehle se usme the

function displaystu(object){
    console.log(`My name is ${object.name} and my age is ${object.age}`);
}
displaystu(student);

//ab destructuring se krke dkhenge 
function displaystu({age,name}){ //age,name aage piche likho no matter print krte time wo sequence se utha lega
    console.log(`My name is ${name} and my age is ${age}`);
}
displaystu(student);

// let numbers=[10,20,30];
// let [a,b,c,d]=numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


let data=[1,2];
//if data=[] hoga tab a=10,b=20 aayega
let[a=10,b=20]=data;
console.log(a);
console.log(b);

let p=5;
let q=10;
[p,q] =[q,p];
//p,q=q,p nhi chkega bcoz wo q=q ho rhega
console.log(p);
console.log(q);


let colors=["red","blue","green"];
let[,second]=colors;
console.log(second);