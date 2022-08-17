//Reducr - objects

//cart example
const cart = [
    {
        title:'sumsung Galaxy s7',
        price:599.99,
        amount:1,
    },
    {
        title:'google pixel',
        price:499.99,
        amount:2,
    },
    {
        title:'Xiaomi Redmi Note 2',
        price:699.99,
        amount:4,
    },
    {
        title:'Xiaomi Redmi Note 5',
        price:399.99,
        amount:3,
    }
]

let total =cart.reduce((total,cartItem)=>{
    const {amount,price}=cartItem
    total.totalItem+=amount
    total.cartTotal+=amount*price
    return total
},{
    totalItem:0,
    cartTotal:0,
})

console.log(total);