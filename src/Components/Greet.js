import React from 'react';

// function Greet(){
//     return <h1>Hello Mrunali</h1>
// }
// export default Greet;
const Greet=({fname,lname})=>{
    console.log({fname,lname})
return<h1>hello {fname} {lname}</h1>
}

export default Greet;