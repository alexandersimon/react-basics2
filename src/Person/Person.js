// We are not using this:
// function person() {
//     return <h2>Person</h2>;
// }

// var person = function() {
//     return <h2>Person ES5</h2>
// }

// Function Name are lower case
// Use ES6
import './Person.css';
import React from 'react';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
} 

export default person;