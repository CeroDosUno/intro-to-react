import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamCreate extends React.Component{
  //passes in formProps. we took out input from formProps
  renderInput({input, label}){
    return (
      <div className="field">
      <label> {label} </label>
      <input
        {...input}
      />
      </div>
    );
  }


  render(){
    console.log(this.props);

      return (

        <form className="ui form">
          <Field
            name="Title"
            component={this.renderInput}
            label="Enter Title:"
          />
          <Field
            name="Description"
            component={this.renderInput}
            label="Description:"
          />

        </form>

      );
    }
}

//pass in only 1 form
export default reduxForm({form:'simple'})(StreamCreate);
