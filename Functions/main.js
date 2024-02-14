// Ejercicio 1

function add () {
    let num1= 100;
    let num2= 20;

    console.log(num1 * num2);
}
// Ejercicio 2

add();

// Ejercicio 3

function add2 (num1, num2) {

    console.log(num1 * num2);
}

add2(100,20);


// Ejercicio 4

let number1 = 100;
let number2 = 20;

function add3 (num1, num2) {

    console.log(num1 * num2);
}

add3(number1,number2);

// Ejercicio 5

function add4 () {

    resultado = 100 * 20;
    return resultado;
}

console.log(add4());



// Ejercicio 6


const fA = function(){
    
    resultado = 100 * 20;
    return resultado;
};

console.log(fA());

// Ejercicio 7

 function greet(name) {
    console.log(`Hello ${name}`);
 }

greet("Nahuel");

// Ejercicio 8

const multiplication = function (numberOne, numberTwo) {
    return numberOne * numberTwo;
}

console.log(multiplication(2,5));
console.log(multiplication(10,3));

// Ejercicio 9

function area(base, height) {
    return `its area ${height * base / 2}`;
}

console.log(area(5,4));


// Ejercicio 10

function perimeter(side1, side2, side3) {
    return `the perimeter of the triangle is ${side1 + side2 + side3}`;

}

console.log(perimeter(4,8,6));

// Ejercicio 11

function productPurchase (price, quantity){
    let totalPrice = price * quantity;
    if (quantity >= 20){
        return `a 20% discount applies to the total price. Total price is ${ totalPrice - (totalPrice * .20)}`;
    }else{
        return `a 10% discount applies to the total price. Total price is ${ totalPrice - (totalPrice * .10 )}`;
    }
}


console.log(productPurchase(2, 50));
console.log(productPurchase(10, 2));

// Ejercicio 12

function isAnAdult (age) {
    
    if (age >= 18){
        return `You are an adult`;
    }else{
        return ` You are not an adult`;
    }
}

console.log(isAnAdult(18));
console.log(isAnAdult(12));
console.log(isAnAdult(19));
console.log(isAnAdult(13));
console.log(isAnAdult(28));

// Ejercicio 13

function annualIncome(income){
    if(income <= 10000){
       return` the tax you must pay is ${income * .10}`;
    }else if (income <= 20000){
        return` the tax you must pay is ${income * .15}`;
    }else {
        return` the tax you must pay is ${income * .20}`;
    }
}


console.log(annualIncome(9000));
console.log(annualIncome(19000));
console.log(annualIncome(30000));

// Ejercicio 14

// function checkDay(day) {
//     switch (day) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             alert(`It is a business day.`);
//             break;
//         case 6:
//         case 7:
//             alert(`It's the weekend.`);
//             break;
                    
//         default:alert(`enter a number from 1 to 7`);
//             break;
//     }
// }


// checkDay(1);
// checkDay(6);
// checkDay(7);
// checkDay(8);


// Ejercicio 15

// function personalInformation() {
//     let name = prompt("enter your name");
//     if (name === ""){
//         console.error("The name cannot be empty.");
//     }else {
//         let lastName = prompt("enter your lastname");
//         if (lastName === ""){
//             console.error("The lastname cannot be empty.");
//         }else{
//             let age3 = prompt("enter your age");
//             if(age3 === ""){
//                 console.error("The age cannot be empty.");
//             }else{
//                 return {name : name, lastName: lastName, age3: age3};
                
//             }
//         }
//     }
// }

// console.log(personalInformation());

// Ejercicio 16


function present (){
    function greet () {
        let name = prompt("enter your name");
        return `Hello, my name is ${name}`
    }
    
    function calculateAge() {
        let yearOfBirth = prompt("enter year of birth");
        let currentYear = prompt("enter the current year");
    
        return `Mi age is ${currentYear - yearOfBirth}`
    }
    alert(`${greet()} and ${calculateAge()}`)
}

present();