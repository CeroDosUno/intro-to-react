import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component{
//syntax to hook up context object.

  render(){

    return (
      <ColorContext.Consumer>
      { (color) =>
        <button className = {`ui button ${color}`}>
        <LanguageContext.Consumer>
        {({language}) => language === 'english'? 'Submit': 'Voorleggen'}
        </LanguageContext.Consumer>
        </button>
      }
      </ColorContext.Consumer>

    );
  }
}

export default Button;
