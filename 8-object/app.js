//faster/easier way to access/unpack variables from objects

const bob={
    first:'bob',
    last:'sanders',
    city:'chicago',
    siblings:{
        sister:'jane'
    },
};

const last='some value';
const {last:shakeandBake,first,city,zip}=bob
console.log(first,city,zip,shakeandBake);






// const firstName=bob.first;
// const lastName=bob.last;
// const sister=bob.siblings.sister;

// console.log(firstName,lastName,sister);