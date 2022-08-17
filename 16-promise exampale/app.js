//javascript Nuggets - Promises Example
//.first - after 1s first red;
//.second - after 3s second blue
//.third - after 2s third green;
//In SEQUENCE!!!!

const btn=document.querySelector('.btn')

btn.addEventListener('click',()=>{
    addcolor(1000,'.first','red').then(()=>addcolor(3000,'.second','blue')).then(()=>addcolor(2000,'.third','green')).catch((err)=>console.log(err))
})

function addcolor(time,selector,color){
    const element = document.querySelector(selector)
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color=color
                resolve()
            },time)
        }else{
            reject(`there is no such element "${selector}"`)
        }
    })
}