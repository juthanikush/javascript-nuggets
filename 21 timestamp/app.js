//Javascript Nuggets
//Timestamps
console.log(new Date());

//Unix Time
//January 1, 1970
//1s=1000ms

//Date.now()
console.log(Date.now())
//new Date().getTime()
console.log(new Date().getTime());
//new Date().valueof()
console.log(new Date().valueOf());

setTimeout(()=>{
    console.log(Date.now());
},1000)

//Create id's in Learing apps
let people = [];
people=[...people,{id:Date.now(),name:'john'}];

setTimeout(()=>{
    people=[...people,{id:Date.now(),name:'peter'}];
    console.log(people);
})
//create/get dates
console.log(new Date(1660714401911));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate)
console.log(new Date())
//difference between dates
const firstDate = new Date();
const secondDate = new Date(2022,8,18);

const firestValue=firstDate.getTime();
const secondValue=secondDate.getTime();

console.log(firestValue)
console.log(secondValue)

const timeDifference = secondValue-firestValue
console.log(timeDifference);
const minutes = timeDifference/(1000*60);
console.log(minutes)

const hours = timeDifference / (1000 * 60 * 60);
console.log(hours);