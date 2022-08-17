function makeUppercase(value){
    console.log(value.toUpperCase())
}

function reverseString(value){
    console.log(value.split('').reverse().join(''))
}

function handleName(name,cb){
    const fullName=`${name} juthani`
    cb(fullName)
}
// handleName('kush',makeUppercase)
// handleName('kush',reverseString)

handleName('kush',(value)=>console.log(value))

const btn =document.querySelector('.btn')

btn.addEventListener('click',function(){
    console.log('hello word')
})

//array methods, setTimeout,evemt Lsteners etc