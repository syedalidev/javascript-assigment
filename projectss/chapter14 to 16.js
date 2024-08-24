// let empty = [];
// empty = "Syed ali";

// let empty2 = {}

// let city = ["karachi","islamabad"];

// let number = [1,2,3,4,5,6,7,8]

// let result = [true, false]

// let mix = ["karachi",5,"islamabad",6,true,false]

// let qualificationPak =  ["SSC" ,"<br>HSC","<br>BS","<br>BCOM","<br>MS","<br>M.PHIL","PHD"]
// document.write("Qualification:" +"<br>"+  qualificationPak);



// let student = ["jameel","danish","ali"];
// let score = [320,230,480];
// let totalMarks= 500;

// document.write("Score of" +  student[0] + "is" + score [0]+ ". percentage :"  ((score[0] / totalMarks) * 100)+"%  <br>");

// let student = ["Jameel", "Danish", "Ali"];
// let score = [320, 230, 480];
// let totalMarks = 500;

// document.write("Score of " + student[0] + " is " + score[0] + ". Percentage: " + ((score[0] / totalMarks) * 100).toFixed(2) + "%<br>");

// document.write("Score of " + student[1] + " is " + score[1] + ". Percentage: " + ((score[1] / totalMarks) * 100).toFixed(2) + "%<br>");

// document.write("Score of " + student[2] + " is " + score[2] + ". Percentage: " + ((score[2] / totalMarks) * 100).toFixed(2) + "%<br>");


//let color = ["yellow", "pink", "white", "blue","black"]
//let user1 = prompt("what color you want to add in first");
// color.unshift(user1);
//let user2 = prompt("what color you want to add the color last");
// color.push(user2);
// color.splice(0,1,"orange","mango")
// color.shift()
// color.pop()
// document.write(color);

// f. Ask the user at which index to add a color and add it
// let indextoadd = prompt("Enter the index to add a color:");
// let colortoadd = prompt("Enter the color to add:");
// color.splice(indextoadd,0,colortoadd);
// console.log(color); 


//Ask the user which index to delete and how many colors to remove

// let indextoadd = prompt("Enter the index to remove a color:");
// let colortoadd = prompt("Enter the color to remove:");
// color.splice(indextoadd,colortoadd);
// console.log(color); 

// let cities = ["karachi","islamabad","lahore","peshawar","sawath","hyderabad"]
// let selectedcites = cities [0] + " "+ cities[2]+ " "+ cities[5]

// console.log(cities);
// console.log(selectedcites);


// 12. Create a single string from an array using join

// let arr = ["THis","is","my","cat"];
// let singlestring = arr.join("");
// console.log(singlestring);

// 13. FIFO - First In First Out

// let fifiarry = [];
// fifiarry.push("first");
// fifiarry.push("second");
// fifiarry.push("third");
// console.log("<h2>FIFO: " + fifiarry.shift() + ", " + fifiarry.shift() + ", " + fifiarry.shift() + "</h2>");


// 14. LIFO - Last In First Out

// let fifo = [];
// fifo.push("mouse");
// fifo.push("keyboard");
// fifo.push("monitor");
// console.log(fifo.pop() + "," + fifo.pop()+ "," + fifo.pop());


// 15. Store phone manufacturers and display a dropdown menu

// let manufacture = ["apple","nokia","motorola","samsung","oppo"];
// document.write("<h2>Select Phone Manufacturer:</h2>");
// document.write("<selected>");
// for(let i=0; i< manufacture.length; i++){
//     document.write("<option>" + manufacture[i] + "</option>")
// }
// document.write("</selcted>")
