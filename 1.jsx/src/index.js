//import REact and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create component
const App = function(){
  return <div> HI there </div>;
};

//rendering component at div tag called root
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
