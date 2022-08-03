import React from 'react';
import ReactDOM from 'react-dom';


var index = 0;


setInterval(() => {
  const element = (
    <h1 className="heading" tabIndex={index}>
      <span>hello world {new Date().toLocaleTimeString()} </span>
      <img className="img" src=""></img>
    </h1>
  );


  ReactDOM.render(element, document.getElementById("root"));
}, 1000)



 