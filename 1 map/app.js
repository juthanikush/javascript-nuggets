//MAP Method
const people = [
    {
        name:'bob',
        age:20,
        position:'developer',
    },{
        name:'anna',
        age:25,
        position:'designer',
    },{
        name:'susy',
        age:30,
        position:'the boss',
    }
];
//Quokka.js - Extension
//returns a new array
//does not change the size of original array(unlike filter)
//uses values from original array when making new one
//first way
const ages1 = people.map((person)=>{
    return person.age;
})
console.log(ages1)
//second way
const ages2 = people.map((person)=> person.age)
console.log(ages2)

const newPeople = people.map((item)=>{
    return{
        firstName:item.name.toUpperCase(),
        oldAge:item.age+20
    };
});
console.log(newPeople);

const names = people.map((person)=>`<h2>${person.name}</h2>`);
const result = document.getElementById("result");
result.innerHTML=names.join('')