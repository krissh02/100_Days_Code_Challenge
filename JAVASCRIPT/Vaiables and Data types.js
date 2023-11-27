// Variables and Data types
console.log("Welcome to krishna sabat");  //log = print

// Variables are containers for data
// fullName = "Krishna Sabat"
// console.log(fullName)
firstName = "Krishna"
lastName = "Sabat"
console.log("Welcome to " + firstName + " " + lastName + " in the new series")
x = null
console.log(x);

// Javascript is a dynamic type language which means we dont have to declare types of data for example char,int,bool
name = 56
console.log(name)

// Variables defined types - let,const and var
// most probably we used let and const
// let = variable cannot be re-declared but can be updated and it is a block scope
let name1 = "krishna sabat";
name1 = "rajendra sabat"    //let can be update value
console.log(name1);
let a;
a = 10;
console.log(a)
// const cannot be redeclared or updated and it is a block scope
const b = 45;
// b = 56;
console.log(b)
// const c;
// console.log(c)

// DATA TYPES - 
// primitive data types - number,boolean,string,undefined,null,symbol,bigint
let name2 = "krishna"
console.log(typeof(name2))
// non-primitive dta types- objects(array and function) - it is a collection of values  
const student = {
    name : "krishna sabat",
    age : 45,
    marks : 78
}
console.log(student);
// to access from the object
console.log(student["name"]);
console.log(student.age);
student["age"] = student["age"] + 3;
console.log(student.age)

// PRACTICE
// Q1. create a const object called product to store information 
const product = {
    productName : "Parker Jotter Standard CT Ball Pen (Black)",
    productRate : "****",
    productPrice : 270,
    productOffer : 5
}
console.log(product);
// Q2. create a const object called profile to store info
const profile = {
    name : "shradha kapra",
    post : 195,
    followers : 569 + "k",
    following : 4,
    bio : "Apna College | Ex-Microsoft , DRDO"
};
console.log(profile);
console.log(typeof profile.post);






