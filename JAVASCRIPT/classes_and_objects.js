// Classes and Objects
const student = {
    fullName : "Krishna Sabat",
    marks:89,
    printMarks : function(){
        console.log("Marks is ",this.marks);
    },
}
// we can set prototype - if we want to access function of one object in second object then use .__proto__
const employee={
    calTax(){
        console.log("tax is 10% rate");
    }
}

const karanArjun = {
    salary : "5000",
    // if obj and prototype have same method then objects method will be used
    calTax(){
        console.log("tax rate is 20%");
    }
}
karanArjun.__proto__ = employee;

// Classes - object ko banane ke liye ek blueprint template deti hai 
// blueprint
class ToyatoCar{

    // Constructor() method - Inside Classes the constructor method is automatically invoked by new method and also the constructor method is intilializes the object
    constructor(brand){
        console.log("creating new object"); //jaise hi koi new obj ye class se create kiya hoga tho us time wo new keyword phele wo class me constructor dundega aur usko milgaya tho wo run kardega nhi tho wo khud invoked karega
        this.brandName = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    // to make variable through function
    setBrand(brand,speed){
        this.brandName = brand;
        this.speed = speed;
    }
}
// create a new obj
let honda = new ToyatoCar("honda");
// honda.setBrand("honda",78);
// console.log(honda);


// Inheritence 0 passing down the properties and methods from parent class to child class
class Person{
    constructor(name){
        // this.species = species;
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends Person{
    // Super Keyword - is used to access the constructor of the parent class in the child class
    constructor(name){
        super(name);
    }
    work(){
        super.eat();
        console.log("working");
    }
}

let obj = new Engineer("krishna");

// Q1.
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Allowing");
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        // super.viewData();
        console.log("Edit");
    }
}
let user1 = new Admin("krishna","sabatkrishna@gmail.com");

// Error Handling
// 1. try-catch block
let a = 5;
let b = 6;
console.log(a+b);
console.log(a-b);
console.log(a+b);
try{
    console.log(a+c);
}
catch(err){
    console.log(err); //to show what error it is
}
console.log(a+b);
console.log(a+b);
console.log(a+b);
console.log(a+b);

// Static method
class Animal{
    constructor(name){
        this.name =name;
    }
    walk(){
        console.log(`Animal ${Animal.capitalize(this.name)} is walking`);
    }
    // static method iske liye use karte hai because usko pure program me kidar me use kar sakte hai by classname
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length);
    }
}
let j = new Animal("krishna");
j.walk();

// Getter , Setter and instance method 