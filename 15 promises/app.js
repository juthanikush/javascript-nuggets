//javascript Nuggets - Promises

//async await

//consume/ use promises

//pending, Rejected, fulfilled

const value=2
const promise = new Promise((resolve,reject)=>{
    //resolve([1,2,3])
    const random=Math.floor(Math.random() * 3);
    if(random===value){
        resolve('you guessed correctly')
    }else{
        reject('Wrong Number')
    }
})

console.log(promise)
promise.then((data)=>console.log(data)).catch((err)=>console.log(err))