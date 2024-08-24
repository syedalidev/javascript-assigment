 // Assignment  6 t0 9

 // 1. Arithmetic Operations
// let number = 10; // You can change this number to anything you want

// console.log("Initial Number: " + number);

// let addResult = number + 5;
// console.log("After adding 5: " + addResult);

// let subtractResult = number - 5;
// console.log("After subtracting 5: " + subtractResult);

// let multiplyResult = number * 5;
// console.log("After multiplying by 5: " + multiplyResult);

// let divideResult = number / 5;
// console.log("After dividing by 5: " + divideResult);

// let modulusResult = number % 5;
// console.log("After modulus by 5: " + modulusResult)


// 2. Variable Output
// let a = 2, b = 1;
// let result = --a - --b + ++b + b--;

// console.log("a: " + a); // 1
// console.log("b: " + b); // 0
// console.log("result: " + result); // 

// greet user

// let userName = prompt("Enter your name");
// console.log("hello :"+ userName + " "+ "welcome to my website");

// multiplication table

// let userName = prompt("Enter your table number");
// userName = parseInt(userName);

// for(let i = 1; i<=10; i++){
//     console.log(userName + "x" + i+ "=" +( userName*i))
// }

let subject1 = prompt("enter your first subject name");
let subject2 = prompt("enter your second subject name");
let subject3 = prompt("enter your third subject name");

let totalmarks = 100;


let obtainedmark1 = prompt("enter your first obtained marks"+subject1);
let obtainedmark2 = prompt("enter your second obtained marks"+subject2);
let obtainedmark3 = prompt("enter your third obtained marks"+subject3);

let obtaindmarks = obtainedmark1+obtainedmark2+obtainedmark3;
let percentage = (obtaindmarks / (totalmarks*3))*100;

console.log("Subject\t\tTotal Marks\tObtained Marks");
console.log(subject1+"\t\t"+obtainedmark1 +"\t\t"+percentage);
console.log(subject2+"\t\t"+obtainedmark2+"\t\t"+percentage);
console.log(subject3+"\t\t"+obtainedmark3+"\t\t"+percentage);

console.log("total marks obtained :" + obtaindmarks);
console.log("percentage:"+ percentage.toFixed(2) +"%");










