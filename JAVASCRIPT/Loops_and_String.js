// loops is used to execute the piece of code again and again
// let v;
// for(v=1;v<=5;v++){    //for(initilize;stopping cond;updation)
//     console.log("krishna sabat");
// }
// // calculate the sum of 1 to 5
// let sum = 0;
// let n = 10;
// for(let r=1;r<=n;r++){
//     sum+=r;
// }
// console.log("The sum of 1 to 5 numbers is ",sum);

// // while loop
// let q = 1;
// while(q<=5){
//     console.log("Krishna");
//     q++;
// }

// do-while loop - atleast 1 time will be run the code
// let w = 20;
// do {
//     console.log("krishna");
//     w++;
// } while(w<=10);

// One for special loop i.e. for-of loop - it is same like for loop but only it is used for iterating on some speical datatypes
// it is basically used in string and array

// to find length of characters
// let char = "krishna";
// let size=0;
// for(let i of char){
//     size++;
// }
// console.log("The length of char is ",size)

// now for-in loop is used for  objects and further in arrays also

let stud1 = {
    name:"krishna sabat",
    age:21,
    cgpa:9.48,
    ispass:true
};
for(let key in stud1){
    console.log("key = ",key, "value = ",stud1[key]);
}

// LET'S PRACTICE
// Q1. print all even numbers from 1 to 100
// let num2;
// let val = 0
// for(num2=1;num2<=100;num2++){
//     if(num2%2===0){
//         console.log(num2);
//         val++;
//     }
// }
// console.log("Total even number from 1 to 100 is ",val)

// Q2. Create a game where you start with any random game number.
// ask the user to keep guessing the game number until the user enter the correct value

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while(userNum !=gameNum){
//     userNum = prompt("You entered wrong number Guess again : ");
// }
// console.log("Congrulations, you entered right number");

// STRINGS
let str = "krishnasabat"
console.log(str.length);  //to know length of charachters
console.log(str[3]);      //indices properties

//Template Literals - a way to have embedded expressions in strings

let obj = {
    item:"pen",
    price:20
}

console.log("the cost of",obj.item,"is",obj.price,"ruppes") //normal expression
console.log(`The cost of ${obj.item} of ${obj.price} ruppes`);  //template literals so this phenomena is called as string interpoliation

// Escape charachter - \n (to go in the next line)
// to give tab space then used \t
console.log("krishna\nSabat");
console.log("krishna\tSabat");

// String Methods - there are a built in function to manipulate the string
let str1 = "krishna sabat";  //why it is not change in the original string because in the javascript the string is immutbale 
let str2 = str1.toUpperCase();
let str3 = str2.toLowerCase();
let str4 = str1.trim();  //it will remove white spaces from starting and ending
let str5 = str1.slice(3,6);
let str6 = str1.concat(str5);
let str7 = str1.replace("sabat","patel");
let str8 = str1.charAt(5);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str8);

// Lets practice
let user1 = prompt("Enter the full name");
let user2 = user1.length;
console.log(`@${user1}${user2}`);



