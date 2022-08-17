//Rest Operator
//gathers/collects items
//destructuring,function
//placement important, careful with the same name
//rest when declare function, spread when invoke the function

//arrays
const fruits=['apple','orange','lemon','banana'];
const [first,...restofTheFryits]=fruits;
console.log(first,restofTheFryits);
const specificFruit=restofTheFryits.find((fruit)=>fruit==='lemon');
console.log(specificFruit);

//objects
const person={name:'john',lastName:'smith',job:'developer'};
const { name,...rest }=person;
console.log(name,rest)

//function
const getAverage=(name,...scores)=>{
    console.log(name);
    console.log(scores);
    const average=scores.reduce((total,item)=>{return total+=item},0)/scores.length;
    console.log(average);
}

getAverage(person.name,86,79,69,99)