//import REact and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create component
const App = function(){
  const buttonText={text:"clickme"};

  // function buttonText() {
  //   return "clicked";
  // };

  return (
  <div>
    <label className="label" htmlFor="name">
    Enter name
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor:'blue', color:'white'}}>
     {buttonText.text}
     </button>
  </div>
);
};

//rendering component at div tag called root
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
