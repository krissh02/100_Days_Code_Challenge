// Events means change in the state of object
// Various types of Events
// 1. Mouse Events (click,double click,etc);
// 2. Keyboard Events(keypress,keyup,keydown);
// 3. form events(submit,etc);
// 4. print event and many more;

// Event objects in js - it is the special object  that has details about the event
// let btn = document.querySelector("button");
// btn.onclick = (evt) =>{
//     // console.log("button is clicked");
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
// }

// Remove the event listener Doubt

// Lets Practice
// Q1. create a toggle button that changes the screen to dark-mode when clicked and light mode when clicked again
let mode = document.querySelector("#mode");
let flag = 0;
mode.addEventListener("click",()=>{
    if(flag==0){
        document.body.style.backgroundColor = "pink";
        flag = 1;
    }
    else{
        document.body.style.backgroundColor = "white";
        flag = 0;
    }
    console.log(flag);
})

let str = "krishna";
console.log(str+"4");
console.log(typeof str);

const obj = {
    name:"krishna",
    age:21
}
// obj.name = "sabat";
obj.cgpa = 9.48;
console.log(obj);

let age = 20;
let age1 = age>18?"you can drive":"you cannot drive";
console.log(age1);

let arr = [1,2,3,4];
// let pt = prompt("Enter the number to add in the array");
console.log(arr.push(5));