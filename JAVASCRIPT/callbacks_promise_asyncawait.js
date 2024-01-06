// Sync and Asynchronous
// 1. Sync - means the code runs in particular sequence of instructions given in the program and each instruction waits for previous instruction to complete its execution
// 2. Asynchronous - its code execution allows to execute next instructions immediately and doesnt block the flow
// console.log("Welcome");
// console.log("to");
// setTimeout(()=>{
//     console.log("krishna");
// },1000);
// console.log("sabat");

// // Callbacks - a function is passed as a argument in another function

// const getData = (dataId,getNextData) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },3000)
//     })
// }

// // by async-await
// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
// }

// // by promise chain
// console.log("fetching data1...")
// getData(1).then(()=>{
//     console.log("fetching data2...")
//     return getData(2)
// }).then((res)=>{
//     console.log(res)
// })



// // callback hell is a nested callbacks stacked below one another forming a pyramid structure.
// getData(1,()=>{
//     console.log("getting data 2...")
//     getData(2,()=>{
//         console.log("getting data 3...")
//         getData(3,()=>{
//             console.log("getting data 4...")
//             getData(4)
//         })
//     });
// });

// Promises - is a  solution to callback hell
// promise is a eventual completion of task ans it is an object in js
// Syntax - let promise = new Promise((resolve,reject)=>{ })
// const getData = (dataId,getNextData) => {
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success")
//     })
// }
// // two methods .then() to resolve and .catch() to catch the error
// let promise = getData();
// promise.then(()=>{
//     console.log("successfully resolve");
// })

// Promise Chain
// const asyncFunc1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1")
//             resolve("success");
//         },3000);
//     })
// }
// const asyncFunc2 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2")
//             resolve("success");
//         },3000);
//     })
// }

// console.log("fetching data1...")
// asyncFunc1().then(()=>{
//     console.log("fetching data2...");
//     asyncFunc2().then(()=>{})
// })

// Async - it always return promise function
// async function hello () {
//     return new Promise((resolve,reject)=>{
//         console.log("hello");
//         resolve("success");
//     })
// }
// await - it pauses the execution of its surrounding async function until the promise is settled 
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weater data");
//             resolve("success");
//         },2000)
//     })
// }

// async function getWeatherData(){
//     await api(); //1st call
// }

// to solve the problem of to invoked the function going into the console 
//  we can use IIFE - Immediately Invoked Function Expression

// Syntax - (function(){   })();