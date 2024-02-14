// Ejercicio 1

// let number = +prompt("enter a number from 1 to 100");

// if(number < 1 || number > 100){
//     alert("your number must be from 1 to 100");
// }else {
//     for (let i = number; i >= 0 ; i--) {
//         console.log(i);
        
//     };
// };

// Ejercicio 2 

// let number2 = +prompt("enter a number from 1 to 10");

// if (number2 < 1 || number2 > 10){
//     alert("your number must be from 1 to 10");
// }else{
//     for (let i=1 ; i <= 10 ; i++){
//         console.log(`${i} x ${number2} = ${i * number2}`);
//     };
// };

 // Ejercicio 3

// let addition= 0;

// let number3 = +prompt("Enter a number that you want to add, if it turns out to be 0, the addition stops.");

// while (number3 !== 0){
    
//     addition += number3;
//     number3 = +prompt("Enter a number that you want to add, if it turns out to be 0, the addition stops.");
// };    
// console.log(`the result is ${addition}`);
    



// Ejercicio 4

// let addition2 = 0;

// let number4 = +prompt("Enter a number that you want to add, if it turns out to be 0, the addition stops.");
// do{
//     addition2 += number4
//     number4 = +prompt("Enter a number that you want to add, if it turns out to be 0, the addition stops.");

// };
// while (number4 !== 0){
    
//    console.log(`the result is ${addition2}`);
    
// };    
 
// Ejecicio 5


//  let student = {
//     name: "Nahuel",
//     lastname: "Moreno",
//     origin: "Argentina",
//     studies:"Accenture - Javascript",
//     age : 27
//  };

//  for (const properties in student) {
//     console.log(properties); 
// };

 
// // Ejercicio 6

    
//  for (const properties in student) {
//         console.log(student[properties]);  
//  };


//  Ejercicio 7

// let secretNumber = addition;

// let attempts = 1;

// let number4 = +prompt("Find the secret number");

// while (number4 !== addition){

//     if(number4 > addition){
//         number4 = +prompt("the number entered is greater than the secret");
//         attempts ++
//     };
//     else{
//         number4 = +prompt("the number entered is less than the secret");
//         attempts ++
//     };
// };
//  alert(`You got it right! The secret number was ${addition} and you made ${attempts} attempts`);



// Ejercicio 8

// let divisor = +prompt("enter a number");

//  let dividers = [];

// for (let i = 0; i <= divisor; i++) {
//    if (divisor % i === 0 ){
//     dividers.push(i);
//     };
// };

// console.log(`The divisors of ${divisor} are: ${dividers}`);


// Ejercicio 9
// let ringBells = +prompt("enter the number of times you want to ring the bell");

// let ringTheBell = "";

//   function ringBell() {  
    
//         console.log("Ding Dong");

//         return "Ding Dong,"
//     };

//     for(i = 0 ; i< ringBells ; i++){
//         ringTheBell += ringBell();
        
//     };
// console.log(ringTheBell);


// Ejercicio 10


const dateLimit = "1997-8-3";

const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"];


let result = "";



    for(i = 0 ; i < dates.length ; i++){
      
        aux = (dates[i]);
            
        if(dateLimit.localeCompare(aux) != 1){

          result += aux + " ";

        }

      }
      console.log(`the dates that are greater than or equal to ${dateLimit} are ${result}`);


// Ejercicio 11

let colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "Withe"];

for (const color of colors) {
  console.log(color);
};

//   Ejercicio 12
function showColors() {
    for (const color of colors) {
    console.log(color);
};
};

showColors();

// Ejercicio 13

let numbers = [15, 2, 7, 4, 5];

for (let number of numbers) {
  result = number * 2;
  console.log(`the number is ${number} and its double is ${result}`);
};


// Ejercicio 14

let familyMembers2 = [
  {name: 'Juan', lastName: 'Perez', age: 38, member: 'father'},
  {name: 'María ', lastName: 'Lopez', age: 40, member: 'mother'},
  {name: 'Romina', lastName: 'Perez', age: 13, member: 'daughter'},
  {name: 'Tomas', lastName: 'Perez', age: 10, member: 'son'},
 ];

function familyMember2() {
  
  for (let i = 0; i < familyMembers2.length ; i++) {
    
    console.log(`Hello, I am ${familyMembers2[i].name} ${familyMembers2[i].lastName}(${familyMembers2[i].member}) and I am ${familyMembers2[i].age} years old.`);
    
  }
}

familyMember2();

// Ejercicio 14 2da forma

 //  let familyMembers = [];

// function familyMember() {
  
//   for (let i = 0; i < 4; i++) {
    
//     let name = prompt("enter your name");
//       if (name === ""){
//           console.error("The name cannot be empty.");
//       }else {
//           let lastName = prompt("enter your lastname");
//           if (lastName === ""){
//               console.error("The lastname cannot be empty.");
//           }else{
//               let age = prompt("enter your age");
//               if(age === ""){
//                   console.error("The age cannot be empty.");
//               }else{
//                 let member = prompt("enter member");
//                 if(member === ""){
//                     console.error("The age cannot be empty.");
//                 }else{
//                     familyMembers.push(`Hello, I am ${name} ${lastName}(${member}) and I am ${age} years old.`); 
                    
//                 }
                  
//               }
//           }
//       }
//   }
//   console.log(familyMembers);
// }

// familyMember();

// Ejercicio 15 


// let evenNumbers= 0;

// let oddNumbers= 0;

// let number5 = +prompt("Enter a number that you want to add, if it turns out to be 0, the addition stops.");

// while (number5 !== 0){
//     if (number5 % 2 === 0 && number5!== 0){
//       evenNumbers += number5
//       number5 = +prompt("Enter a number that you want to add, if it turns out to be 0, the addition stops.");
     
//     }else{
//       oddNumbers += number5
//       number5 = +prompt("Enter a number that you want to add, if it turns out to be 0, the addition stops.");
      
//     };
//   };    
//   console.log(`Even number:${evenNumbers} Odd numbers: ${oddNumbers}`); 
  

  // Ejercicio 16

  // let arrayNumber = ""

  // let arrayNumbers = [];

  // let repeat = 0;

  // while (repeat < 10) {
  //   arrayNumber = +prompt("enter a number");
  //   arrayNumbers.push(`${arrayNumber} `);
  //   repeat++;
  //   console.log(arrayNumber)
  // };
  // alert(`the largest number in the array is ${Math.max(...arrayNumbers)}`);