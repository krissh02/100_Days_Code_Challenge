// Window Object - the window object represents an open window in a browser. Its a browser object (not js) and 4
// it is automatically created by browser.

// DOM - Document Object model - basically it is used to manipulate to our web page
// console.dir(window);
// console.dir(window.document);
// console.dir(document.body);
// // document.body.childNodes[1].innerText = "Document Object Model(DOM)";

// // DOM Manipualtion
// // 1. Selecting by id
// let button = document.getElementById("myId"); //this will return value
// console.dir(button);
// // 2. Selecting by class
// let headings = document.getElementsByClassName(".myClass");
// console.dir(headings);
// // 3. Selecting by tag 
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);
// // Query Selector - it can access id,class,tag
// let firstEl = document.querySelector("p"); //this will return first element of p
// console.dir(firstEl);
// let allEl = document.querySelectorAll("p"); //this will return nodelist
// console.dir(allEl);

// // DOM Manipulation Properties
// // 1. tagName
// console.dir(firstEl.tagName);
// 2. innerText - this will give inner text and also return childnodes
// let div = document.querySelector("div");
// console.dir(div);
// // 3. innerHTML - this will give plain text and also return tags
// // 4. textcontent - return textual content even for hidden elements
// let h1 = document.querySelector('h1');

// Lets Practice
// let h2 = document.querySelector("h2");
// console.dir(h2);
// h2.innerText = h2.innerText+"from Apna College";

// let div = document.querySelectorAll(".box");
// console.dir(div);
// // div[0].innerText = "new unique value 1";
// // div[1].innerText = "new unique value 1";
// // div[2].innerText = "new unique value 2";
// // let idx = 1;
// // for(divs of div){
// //     divs.innerText = `new unique value of ${idx}`;
// //     idx++;
// // }
// // console.log(divs);

// // By Sheryians youtube channel the study of DOM
// // var a = document.querySelector("body");
// var b = document.querySelector("h2")
// // a.style.backgroundColor = "green";

// // Event Listener
// a.addEventListener("click",function(){
//     // a.style.backgroundColor = "green";
//     b.innerText = "Hello Javascript from Shreyians Youtube Channel"
// })

// var bulb  = document.querySelector("#bulb");
// var button = document.querySelector("button");
// var idx = 1;
// button.addEventListener("click",function(){
//     if(idx%2!==0){
//     bulb.style.backgroundColor = "yellow";
//     }
//     else{
//     bulb.style.backgroundColor = "white";
//     }
//     idx++;
// })

// // Attributes
// // 1. getAttribute - to get the attribute value
// let p = document.querySelector("p");
// console.log(p.getAttribute("class"));
// // 2. setAttribute
// console.log(p.setAttribute("class","class"));

// // Insert Element - to insert the new element firstly we have to create that element for example: p,h1 then add the element
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!"
// let div2 = document.querySelector(".div");
// div2.append(newBtn);
// let newPara = document.createElement("h4");
// newPara.innerText = "Insert Element";
// div2.prepend(newPara);
// let newOrder = document.createElement("li");
// newOrder.innerText = "Item 1.1"
// let li = document.querySelector("li");
// li.after(newOrder);
// // Delete the element
// newOrder.remove()
// HW- study about appendchild and removechild

// Lets Practice
// let newbtn = document.createElement("button")
// newbtn.innerText = "click me";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";
// let div4 = document.querySelector("#bulb");
// div4.before(newbtn);