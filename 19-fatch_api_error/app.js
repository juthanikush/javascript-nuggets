//javascript Nuggets

//Fetch API - Browser API for HTTP (AJAX) Requests
//Default - GET Requests, Supports other method as well
//Returns Promise

const url='https://www.course-api.com/react-tours-projects'

//console.log(fetch(url))

//fetch(url).then((resp)=>resp.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))

const getTours = async () =>{
    try {
        const resp = await fetch(url)
        if(!resp.ok){
            const msg = `There was an error "${resp.status} ${resp.statusText}"`
            throw new Error(msg)
        }
        const data = await resp.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click',getTours)
