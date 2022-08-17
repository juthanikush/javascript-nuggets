//Reduce
//iterates,callback function
//reduces to a single value - number, array, object
//1st parameter ('acc') - total of all calcculations
//2st parameter ('curr') - current iteration/value
const staff=[
    {name:'bob',age:20,position:'developer',salary:100},
    {name:'peter',age:25,position:'designer',salary:300},
    {name:'susy',age:30,position:'the boos',salary:400},
    {name:'anna',age:35,position:'intern',salary:10},
]

const dailyTotal = staff.reduce((total,person)=>{
    total+=person.salary
    return total
},0)
console.log(dailyTotal)