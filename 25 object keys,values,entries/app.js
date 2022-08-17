//Three method to convert objects into arrays
//object.keys()-converts property names into array
//object.values()-converts property values into array
//object.entries()-converts both



const person = {
    name:'john',
    age:25,
    status:'student',
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const result = Object.entries(person);
console.log(result);

//Map method

const newResult = result.map((item)=>{
    const [first,second]=item;
    console.log(first,second);
    return first
})

//console.log(newResult)

//for of
for(const [first,second] of result){
    //const[first,second]=item;
    console.log(first,second)
}