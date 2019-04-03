//import REact and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create component
const App = function(){
  return (
  <div>
    <label class="label" for="name">Enter name </label>
    <input id="name" type="text" />
    <button> Submit</button>
    <h1> hello</h1>
  </div>
);
};

//rendering component at div tag called root
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
