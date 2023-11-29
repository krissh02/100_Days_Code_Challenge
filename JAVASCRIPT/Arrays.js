// arrays - it is a collection of items
let marks2 = [45,67,89,39]
console.log(marks2);

// looping of an array
//  print all the elements of array
let names = ['krishna','sabat','rajendra','patel','rahul','raj'];
for(let i = 0;i<names.length;i++){
    console.log(names[i]);
}

//for-of loop
for(let el of names){
    console.log(el);
}

// Lets Practice
let marks3 = [85,97,44,37,76,60];
let sum=0;
for(let mk=0;mk<marks3.length;mk++){
    sum+=marks3[mk];
}
sum/=marks3.length;
console.log("Avg marks = ",sum);

let items = [250,645,300,900,50];
let idx = 0;
for(let val of items){
    console.log(`value at index ${idx} = ${val}`);
    let offer = val/10;
    items[idx] = items[idx] - offer;
    console.log(`value after offer = ${items[idx]}`);
    idx++;
}

// Array methods
let arr = ["fruits","veggies",67,78];
let run = [5,7,8,9];
console.log(arr);
console.log(arr.push(true));
console.log(arr.pop());
console.log(arr.toString());
console.log(arr.concat(run));
console.log(arr.unshift("apple"));  //unshift is like push the element only the unshift is push at start in the array
console.log(arr.shift());

//splice method is used to change the original array 
let evenNum = [2,4,6,8];
// console.log(evenNum.splice(1,3,3,5,7));
//Add the element
// console.log(evenNum.splice(2,0,7));
//Delete the element
// console.log(evenNum.splice(3,1));
//Replace element
console.log(evenNum.splice(2,1,5));

//Lets Practice
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// let remove_companies = companies.shift();
// console.log("Removed the first company from the array is",remove_companies);
// console.log(companies.splice(2,1,"Ola"));
console.log(companies.push('Amazon'));