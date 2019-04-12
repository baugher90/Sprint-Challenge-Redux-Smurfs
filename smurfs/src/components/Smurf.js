import React from 'react';

const Smurf = props =>{
    
    return (
        <div key={props.index}>
       
            <h1>{console.log(props)}Name: {props.props.name}</h1>
            
            <p>Age: {props.props.age}</p>
            <p>Heaight: {props.props.height}</p>
        </div>
    )
}

export default Smurf;