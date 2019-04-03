//import REact and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create component
const App = function(){
  return (
  <div>
    <label className="label" for="name">
    Enter name
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor:'blue', color:'white'}}>
     Submit</button>
  </div>
);
};

//rendering component at div tag called root
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
