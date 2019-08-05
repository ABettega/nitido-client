import React from 'react';
import "./input.css"

const Input = (props) => {
    return ( 
        <input name={props.name} type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e) => props.change(e)}></input>
     );
}
 
export default Input;