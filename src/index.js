import React from "./react";
import ReactDOM from './react-dom';

const ele = (
  <div className="active" title="123">
    Hello<h3>react <i style={{color:'red'}}>from the scratch!!!</i></h3>
  </div>
);

ReactDOM.render(ele, document.getElementById('root'))

/*
babel translate
"use strict";

const ele = React.createElement("div", {
    className: "active",
    title: "123"
  }, "Hello ", React.createElement("h3", null, "react"));

*/
