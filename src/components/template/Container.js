import React from "react";

export default (props) => (
    <div id="main">
          <div className="header">
            <h1>{props.titlePage}</h1>
          </div>
          <br/>
          <div className="content" id="content">
            {props.children}
          </div>
    </div>
);