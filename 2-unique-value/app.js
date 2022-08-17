const menu=[
    {
        name:'pancakes',
        category:'breakfast',
    },
    {
        name:'burger',
        category:'lunch',
    },
    {
        name:'steak',
        category:'dinner',
    },
    {
        name:'bacon',
        category:'breakfast',
    },
    {
        name:'banana',
        category:'breakfast',
    },
    {
        name:'pasta',
        category:'dinner',
    },
]

//map-get all instances
//new set - narroww down
//['all',...]-turn it back to array


const categories = ['all',...new Set(menu.map((item)=>item.category))];
console.log(categories)
const result = document.getElementById('result');
result.innerHTML=categories.map((category)=>{
    return `<button>${category}</button>`
}).join(' ')