
// Ejercicio 1
let num1 = 4;
let num2 = 5;


if (num1 > num2){
    console.log(num1);
}else {
    console.log(num2);
}


// Ejercicio 2


if(num1 !== num2){  
    if (num1 > num2){
        console.log(num1);
    }else {
        console.log(num2);
    }
}else{
    console.log("The numbers are equal ")
}
// Ejercicio 3

if(num1 !== num2){ 
    console.log("The numbers are different")
 }else{
    console.log("The numbers are equal")
 }

// Ejercicio 4


    let date1 = "2018-9-2";
    
    let date2 = "2023-7-5";
    
    let compareValue = date1.localeCompare(date2)
    
    if(compareValue !== 0){
        if(compareValue === 1){
            console.log(`The date ${date1} is greater than ${date2}`);
        }else{
            console.log(`The date ${date2} is greater than ${date1}`);
        }
    }else{
        console.log("The dates are the same");
    };


// Ejercicio 4 2da forma

    // let date1 = "2018-9-2";

    // let date2 = "2023-7-5";

    // let aux = new Date(date1);

    // let aux2= new Date(date2);

    // if(aux !== aux2){
    //     if(aux > aux2){
    //         console.log(`The date ${date1} is greater than ${date2}`);
    //     }else{
    //         console.log(`The date ${date2} is greater than ${date1}`);
    //     }
    // }else{
    //     console.log("The dates are the same");

    // };
    
    // Ejercicio 5

    let date3 = "2022-2-9";

    let date4 = "2013-3-6";

    let compareValue2 = date3.localeCompare(date4)
    

    if(compareValue2 !== 0){
        if(compareValue2 === 1){
            console.log(`The date ${date3} is greater than ${date4}`);
        }else{
            console.log(`The date ${date4} is greater than ${date3}`);
        }
    }else{
        console.log("The dates are the same");
    };
   

// Ejercicio 5 2da forma


 // let date3 = "2022-2-9";
    
    // let date4 = "2013-3-6";
    
    // let aux3 = new Date(date3);

    // let aux4= new Date(date4);

    // if(aux3 > aux4){
    //     console.log(`The date ${date3} is greater than ${date4}`);
    // }else{
    //     console.log(`The date ${date4} is greater than ${date2}`);
    // };
    
// Ejercicio 6
    let number1 = 5

    let number2 = 7

    let number3 = 9

    if (number1 > number2 && number1 > number3){
        console.log(`The number ${number1} is the largest`);
    }
    else if (number2 > number1 && number2 > number3){
        console.log(`The number ${number2} is the largest`);
    }
    else{
        console.log(`The number ${number3} is the largest`);
    }

// Ejercicio 7


// let program = prompt("choice the color red, blue or green").toLowerCase();

// switch (program){
//     case "red":
//         alert("The color of passion ");
//     break;
//     case "blue":
//         alert("The color of the sea ");
//     break;
//     case "green":
//         alert("The color of nature ");
//     break;
//     default:
//         alert("invalid color");
//     break;
// };

// Ejercicio 8

// let firstNumber = +prompt("Enter the first numerical value between 1 and 100");

// let secondNumber;
// let operation;


// if (firstNumber >= 1 && firstNumber <= 100 ){
//      secondNumber = +prompt("Enter the second numerical value between 1 and 100");
//     if(secondNumber >= 1 && secondNumber <= 100){

//      operation = prompt("indicate what operation you want to perform (addition, subtraction, multiplication, division)").toLowerCase();
    
//      switch(operation){
//          case "addition":
//              alert(`the sum of ${firstNumber} and ${secondNumber} is... , ${firstNumber + secondNumber}`);
//          break;
//          case "subtraction":
//              alert(`the subtraction of ${firstNumber} and ${secondNumber} is... , ${firstNumber - secondNumber}`);
//          break;
//          case "multiplication":
//              alert(`the multiplication of ${firstNumber} and ${secondNumber} is... , ${firstNumber * secondNumber}`);
//          break;
//          case "division":
//              alert(`the division of ${firstNumber} and ${secondNumber} is... , ${firstNumber / secondNumber}`);
//          break;
//          default:
//              alert("invalid operation");
//             break;
//      };
//     }else{
//         alert("enter  a number from 1 to 100"); 
//     }
// } else{
//     alert("enter  a number from 1 to 100");     
// }

// Ejercicio 9

// let person = {
//     name: "Juan",
//     age: 39,
//     height: 1.69
// };
// let person2 = {
//     name: "Mike",
//     age: 25,
//     height: 1.90
// };

// if (person.height < person2.height){
//     if(person.age < person2.age){
//         console.log("Mike is taller and older than Juan");
//     }else{
//         console.log("Mike is taller than Juan and Juan is older than Mike");
//     }
    
//  } else{
//      if (person.age < person2.age){
//          console.log("Juan is taller than Mike and Mike is older than Juan");
//     }else{
//         console.log("Juan is older and taller than Mike ");
//         }
//     };  
     
// Ejercicio 10
 
    // let name = prompt("enter your name").toUpperCase();
    // let age = +prompt("enter your age");
    

    // if (age >= 18){
    //     let height = +prompt("enter your height");
    //     if (height >= 110){
    //         let vision = +prompt("enter your vision ");
    //         if (vision >= 8){
    //             console.log(`${name} You are qualified to drive`);
    //         }else{
    //             console.log(`${name} You are not qualified to drive you must have vision of at least 8 out of 10.`);
    //         }
    //     }else{
    //         console.log(`${name} You are not qualified to drive if you are less than 110 cm tall.`);
    //     }
        
    // }else {
    //      console.log(`${name} You are not qualified to drive if you are under 18 years of age.`);
    // }
    
    
    
// Ejercicio 11
            
       
       
    // let age2 = +prompt("enter your age");

    // if (age2 <= 12 ){
    //     alert("you are infant");
    // } else if(age2 <= 18){
    //     alert("you are adolescent");
    // } else if(age2 <= 45){
    //     alert("you are older young");
    // }else if (age2 <= 100){
    //     alert("you are elderly");
    // }else{
    //     alert("Is he really that old?")
    // }


// Ejercicio 12
    
    // const num123= +prompt("enter only numbers from 1 to 3");

    // let numb;

    // switch (num123) {
    //     case 1:
    //          numb = +prompt("enter any other numerical data");
    //             alert(`The number entered is  ${numb} `)
    //         break;
    //     case 2:        
    //         numb= +prompt("enter any other numerical data");      
    //             alert(`Twice the number entered is ${numb * 2}`)
    //         break;
    //     case 3:
    //         numb = +prompt("enter any other numerical data");
    //             alert(`Three times the number entered is ${numb * 3}`)                   
    //         break;
    //     default:
    //         alert("That value is not allowed")
    //         break;
    // }

// Ejercicio 12 2da forma
          
    // const number123 = prompt("enter only numbers from 1 to 3");

 

    // let boolean = number123.includes("4", "5", "6", "7", "8", "9", "0");

    //     if (boolean){
    //         alert("That value is not allowed")
    //     }else{
    //         let numb = +prompt("enter any other numerical data");

    //         alert(`The number entered is  ${numb} `)
    //         alert(`Twice the number entered is ${numb * 2}`)
    //         alert(`Three times the number entered is ${numb * 3}`)

    //     }

   
    
    
       

// Ejercicio 13
    
    const clients = [
        {
          name:"mark"
        },
        {
          name:"stuart"
        },
        {
          name:"marie"
        },
        {
          name:"rosa"
        },
        {
          name:"sam"
        },
    ]

    
   
const names = [] 

for (i=0; i < clients.length; i++){
    names.push(clients[i].name);    
}

     let clientName = prompt("enter your name").toLowerCase();
     let clientPase = prompt("enter your pase (vip or normal)").toUpperCase();


    if (names.includes(clientName) || clientPase === "VIP"){
            alert("welcome");
           } 
        else {
            let clientEntrance = prompt("Do you have an entrance? (yes or no)").toUpperCase();
             if(clientEntrance === "YES"){
                let entrance = prompt("you want to use it? (yes or no)").toUpperCase();
                if(entrance === "YES"){
                    alert("welcome");
                }else{
                    alert("ok you have to go");
                }
                }else{
                    let buy = prompt("do you want to buy? (yes or no)").toUpperCase();
                    if(buy === "YES"){
                        let money = prompt("How much money do you have available? ").toUpperCase();
                        if(money > 1000){
                            alert("Welcome");
                        }else{
                            alert("you can't enter");
                        }
                    }else{
                        alert("ok you can't enter");
                    }
            }
            
        }
    
   



    