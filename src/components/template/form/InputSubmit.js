import React from "react";

export default (props) => (
    <div className="pure-control-group">
        <label></label>
        <button type="submit" className="pure-button pure-button-primary">{props.label}</button>
    </div>
);