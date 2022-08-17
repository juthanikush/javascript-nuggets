//Javascript Nuggets

const heading=document.querySelector('.heading');
//console.log(heading)

const listItems = document.querySelectorAll('.list-item');
//console.log(listItems)

const getElement = (selector,isList)=>{
    const el=isList
    ?[...document.querySelectorAll(selector)]
    :document.querySelector(selector);
    /*if(isList){
        const el = [...document.querySelectorAll(selector)];
        if(el.length<1){
            throw new Error(`Please double check selector :${selector}`);
        }
        return el;
    }
    const el = document.querySelector(selector);
    if(el) return el;*/

    //if(!isList && el) return el;
    //if(isList && !el.length < 1) return el;

    if((!isList && el) || (isList && !el.length<1)) return el;
    throw new Error(`Please double check selector : ${selector}`)
};

console.log(getElement('.list-item',true));
console.log(getElement('.list-ite',true));
console.log(getElement('.heading'))
console.log(getElement('.headin'))
