// Arithmetic Operators
let c = 4;
let d = 6;
console.log("Addition of "+c+" and "+d+" is ",c+d);
console.log("subtraction of "+c+" and "+d+" is ",c-d)
console.log("Multiplication of "+c+" and "+d+" is ",c*d)
console.log("Division of "+c+" and "+d+" is ",c/d)
console.log("Modulous of "+c+" and "+d+" is ",c%d);
console.log("Exporentiation of "+c+" and "+d+" is ",c**d);

// Unary Operator
let e = 3;
console.log(" e = ",e++);
console.log(" e ",e);


// Assigment Operators
let f = 5
f += 4
console.log("f=",f);
f -= 4
console.log("f=",f);
f *= 4
console.log("f=",f);
f /= 4
console.log("f=",f);

// Comparison operator
let g = 6;
let h = "6";
let i = g == h; //equal to 
console.log("i= ",i);
let j = g===h;  //equal to and type
console.log("j=",j)

// Logical Operators
let p = 7
let o = 8
let cond1 = p>o; //false
let cond2 = p<o; //true
console.log("cond1 && cond2 = ",cond1&&cond2);
console.log("cond1 || cond2 = ",cond1||cond2); 

// CONDITIONAL STATEMENT - to implement some condition in the code

// If statement
let marks  = 40;
if(marks >= 35){
    console.log("Student is passed");
}

let mode = "dark";
let color;

if(mode==="dark"){
    color = "black";
}

if(mode==="light"){
    color = "light"
}
console.log(color);

// If-else statement
let age = 18;
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You are not eligible for voting");
}
// to find the number is odd or even
let num1 = 4;
if(num1%2==0){
    console.log("It is a Even number");
}
else{
    console.log("It is a odd number");
}

// else-if statement - it is used to check multiple statement
let age1= 16;
if(age1<18){
    console.log("Junior")
}
else if(age1<60){
    console.log("Senior")
}
else{
    console.log("Retired")
}

// Special Operator is TERNARY OPERATOR - it used three operand which is 
// Syntax = condition : true output: false output
let age2 = 35;
let result = age2>=18? "adult":"Not adult";
console.log(result);

// Switch Statement
let u = 6;
let y = 4;
let oper = "/";
switch (oper){
    case "+":
        console.log("u+y=",u+y);
        break;
    case "-":
        console.log("u-y",u-y);
        break;
    case "*":
        console.log("u*y=",u*y);
        break;
    case "/":
        console.log("u/y=",u/y);
        break;
    default:
        console.log("Srry the operator is not available");
        break;
}



