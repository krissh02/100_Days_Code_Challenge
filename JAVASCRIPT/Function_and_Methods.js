// Points to remember
// 1. to run the function there are 2 steps (fun defining and fun call)
// 2. after return statement the code will me invalid
// 3. Imp point- the function parameter are like a local variable of a function and it is a block scope
// 4. and in fun defining the variable is parameter and in fun calling that will be argument but they both are same.


function myfun(a,b){
    let sum = a+b;
    console.log(`the sum of ${a} and ${b} is ${sum}`);
}
myfun(4,5);

// Arrow Functions- compact way to write a function

//Multiplication function
const mul = (a,b) => {
    console.log(a*b);
}
mul(5,6);

const printhello = () => console.log("hello world");
printhello();

// lets practice
function string(a){
    let sum=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==='a' || a[i]==='e' || a[i]==='i' || a[i]==='o' || a[i]==='u'){
            sum++;
        }
    }
    console.log(sum);
}
string("krishna");
//write in arrow function
const countVowels = (str) =>{
    let count=0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    console.log(count);
}
countVowels("Krishna");

// 1. for-each  - which is used for only for arrays and it is used to create a loop in the array
// in for each method there are three parameters (val,index,array)
let cities = ["pune","Mumbai","Banglore"];

cities.forEach((val) => {
    console.log(val);
})

/* Interview question 
1. What is higher order function/Method?
for-each is also known as HOF as they either take parameter function or return function as a output*/

// Lets practice
// 1. for a given array of numbers, print the square of each value using the for-each loop
let num3 = [2,3,4,5];
num3.forEach((val) => {
    console.log(val**2);
})
//Map method - here we can create a copy of array

let arr2 = [2,6,8];
let square = arr2.map((val) => {
    return val**2;
})
console.log(square);

// Filter method
let num4 = [1,2,3,4,5,6,7];
let evenNum = num4.filter((val) => {
    return val%2==0;
})
console.log(evenNum);

// Reduce Method - it perform operations and reduce into single value.
let arr5 = [2,3,4,5];
let sum = arr5.reduce((prev,curr) => {
    return prev+curr;
})
console.log(sum);

let arr4 = [5,2,6,3,7];
let greaterNum = arr4.reduce((prev,curr)=>{
    return prev>curr ? prev : curr;
})
console.log(greaterNum);

// Lets practice
let marks2 = [87,93,64,99,86];
let marks3 = marks2.filter((val) => {
    return val <=90;
})
console.log(marks3);

// let user1 = prompt("enter the number");
// let arr3 = [];
// for(let i=1;i<=user1;i++){
//     arr3[i-1] = i;
// }
// console.log(arr3);
// let sumNum = (res,curr) =>{
//     return res+curr;
// }
// let sumNum1= arr3.reduce(sumNum);
// console.log(`Sum of all number is ${sumNum1}`);
// let productNum = arr3.reduce((res,curr)=>{
//     return res*curr;
// })
// console.log(`Product of all number is ${productNum}`);
