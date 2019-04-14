import React from "react";

export default (props) => (
    <div className="pure-control-group">
        <label htmlFor={props.id}>{props.label}</label>
        <input 
            id={props.id} type={props.type} name={props.name}
            value={props.value} onChange={props.onChange} 
        />
        { props.error &&
            <span className="text-danger">{props.error[props.name]}</span>
        }
        
    </div>
);