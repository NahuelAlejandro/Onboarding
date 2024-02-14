// Ejercicio 1

let myName = "Nahuel";

console.log(myName);

// Ejercicio 2

let myLastName  = "Moreno";

console.log(myLastName);

// Ejercicio 3

let myAge  = 27;

console.log(myAge);

// Ejercicio 4

let myPet  = "Leo";

console.log(myPet);

// Ejercicio 5

let petAge = 4;

console.log(petAge);

// Ejercicio 6

let fullName = `${myName} ${myLastName}`;

console.log(fullName);

// Ejercicio 7
let presentationText = `${myName} ${myLastName} ${myAge} ${myPet} ${petAge} ${fullName}`;

console.log(presentationText);

// Ejercicio 8


let sumAges = myAge + petAge;
let subtractAges = myAge - petAge;
let productAges = myAge * petAge;
let divisionAges  = myAge / petAge;

console.log(sumAges);
console.log(productAges);
console.log(productAges);
console.log(divisionAges);

// Ejercicio 9

const student = {

    name: "Nahuel",
    lastName: "Moreno",
    genere: "M",
    age:27,
    courses: "JavaScript"
};

console.table(student);
console.log(student.name);
console.log(student.lastName);
console.log(student.genere);
console.log(student.age);
console.log(student.courses);

// Ejercicio 10

const pet = {
    name: "Leo",
    animal: "dog",
    genere: "M",
    age:4,
    hairColor: "blonde"
};

console.table(pet);
console.log(pet.name);
console.log(pet.animal);
console.log(pet.genere);
console.log(pet.age);
console.log(pet.hairColor);

// Ejercicio 11

const fruits = ["Aple", "Banana", "Orange", "Pear", "Grape"];


console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);

// Ejercicio 12
let iAmAdult = +prompt("Enter your age");


if (iAmAdult >= 18){
    alert( `I am an adult ${iAmAdult}`);
}else{
    alert(`I am not an adult ${iAmAdult}`);
}

// Ejercicio 13

const numbers = [1, 2, 3, 4, 5];


console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// Ejercicio 14


const family = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
        hairColor:"black"
    },
    {
        firstName: "Viky",
        lastName: "Doe",
        age: 48,
        eyeColor: "brown",
        hairColor:"blonde"
    }, 
    {
        firstName: "Jason",
        lastName: "Doe",
        age: 22,
        eyeColor: "brown",
        hairColor:"black"
    },
    {
        firstName: "Marie",
        lastName: "Doe",
        age: 19,
        eyeColor: "blue",
        hairColor:"blonde"
    },
    {
        firstName: "Sam",
        lastName: "Doe",
        age: 15,
        eyeColor: "brown",
        hairColor:"black"
    }];


console.log(family);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);

// Ejercicio 15

let randomText = `${fruits[1]} ${numbers[3]} ${family[4].firstName}`;

console.log(randomText)