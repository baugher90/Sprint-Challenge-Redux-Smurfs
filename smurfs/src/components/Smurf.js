import React from 'react';

const Smurf = props =>{
    
    return (
        <div key={props.index}>
       
            <h1>{console.log(props)}Name: {props.name}</h1>
            
            <p>Age: {props.age}</p>
            <p>Heaight: {props.height}</p>
        </div>
    )
}

export default Smurf;