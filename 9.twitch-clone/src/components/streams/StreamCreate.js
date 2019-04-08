import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamCreate extends React.Component{
  //passes in formProps. we took out input
  //and label from formProps
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

  //onsubmit is handled by redux form
  //no need for event to prevent default.
  //
  onSubmit(formValues){
    console.log(formValues);
  }


  render(){
    console.log(this.props);

      return (

        <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form">
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
          <button className="ui button primary" > Submit </button>
        </form>

      );
    }
}

//pass in only 1 form
export default reduxForm({form:'simple'})(StreamCreate);
