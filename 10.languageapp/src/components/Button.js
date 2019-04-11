import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
//syntax to hook up context object.
  static contextType = LanguageContext;

  render(){
    console.log(this.context);
    return (
      <button className = "ui button primary">
      Submit
      </button>
    );
  }
}

export default Button;
