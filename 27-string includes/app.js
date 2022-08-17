//String includes() - check if a string contains another string

const product=[
    {title:'Modern Poster'},
    {title:'Bar stool'},
    {title:'Armchair'},
    {title:'Leather chair'},
];

const text = 'a';
const filteredProducts=product.filter((product)=>product.title.toLowerCase().includes(text));
console.log(filteredProducts)
// const firstName='john';

// const product = {
//     title:'Leather chair',
// };

// const result = product.title.includes('le');

// console.log(result);