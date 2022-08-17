//Javascript Nuggets
//ECMAscript 2022
// at() - takes integer and returns the item at that index string , array

//Top Level await Basic Example

const scores=[99,90,100];
const oldLast = scores[scores.length-1]
console.log(oldLast)

const newLast = scores.at(-1);
console.log(newLast)

const channel = 'kush juthani'
console.log(channel.at(0))