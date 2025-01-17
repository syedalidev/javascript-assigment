// Assignment 12 to 13

// function checkCharacter(input) {
//     if (!isNaN(input)) {
//         console.log("The input is a number.");
//     } else {
//         let ascii = input.charCodeAt(0);
//         if (ascii >= 65 && ascii <= 90) {
//             console.log("The input is an uppercase letter.");
//         } else if (ascii >= 97 && ascii <= 122) {
//             console.log("The input is a lowercase letter.");
//         } else {
//             console.log("The input is not a number or a letter.");
//         }
//     }
// }

// // 2. Program to accept two integers and display the larger, or if they are equal
// function compareIntegers(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1 + " is larger.");
//     } else if (num2 > num1) {
//         console.log(num2 + " is larger.");
//     } else {
//         console.log("Both numbers are equal.");
//     }
// }

// // Example usage:
// compareIntegers(5, 10);  // 10 is larger.
// compareIntegers(10, 10); // Both numbers are equal.


// // 3. Program to check if a number is positive, negative, or zero
// function checkNumber(num) {
//     if (num > 0) {
//         console.log("The number is positive.");
//     } else if (num < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// // Example usage:
// checkNumber(10);   // The number is positive.
// checkNumber(-5);   // The number is negative.
// checkNumber(0);    // The number is zero.


// // 4. Program to check if a character is a vowel
// function isVowel(char) {
//     char = char.toLowerCase();
//     return (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
// }

// // Example usage:
// console.log(isVowel('A'));  // true
// console.log(isVowel('b'));  // false


// // 5. Program to validate password
// var correctPassword = "mypassword";  // Store correct password

// function checkPassword() {
//     var userPassword = prompt("Enter your password:");

//     if (userPassword === "") {
//         console.log("Please enter your password");
//     } else if (userPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password.");
//     } else {
//         console.log("Incorrect password.");
//     }
// }

// // Example usage:
// checkPassword();  // Will prompt the user for input


// // 6. Fix the if/else statement
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);  // Outputs: Good day


// // 7. Program to take time in 24-hour format and provide corresponding greeting
// function checkTime(time) {
//     if (time >= 0 && time < 1200) {
//         console.log("Good Morning");
//     } else if (time >= 1200 && time < 1700) {
//         console.log("Good Afternoon");
//     } else if (time >= 1700 && time < 2100) {
//         console.log("Good Evening");
//     } else if (time >= 2100 && time <= 2359) {
//         console.log("Good Night");
//     } else {
//         console.log("Invalid time entered.");
//     }
// }

// // Example usage:
// checkTime(1900);  // Good Evening
// checkTime(2300);  // Good Night
