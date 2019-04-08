import React from 'react';
import {Field,reduxForm} from 'redux-form';

class StreamCreate extends React.Component{
  //passes in formProps. we took out input
  //meta and label from formProps
  renderInput({input, label, meta}){
    return (
      <div className="field">
      <label> {label} </label>
      <input
        {...input}
      />
      <div>{meta.error} </div>
      </div>
    );
  }

  //onsubmit is handled by redux form
  //no need for event to prevent default.
  //
  onSubmit(formValues){
    // console.log(formValues);
    //handles preventdefault()
  }


  render(){

      return (

        <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form">
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title:"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description:"
          />
          <button className="ui button primary" > Submit </button>
        </form>

      );
    }
}

const validate = (formValues) =>{
  const errors = {};
  if(!formValues.title){
    errors.title = 'Please enter a title.';
  }
  if(!formValues.description){
    errors.description = 'Please enter a description.';
  }

  return errors;
};


//pass in only 1 form
export default reduxForm({
  form:'simple',
  validate
})(StreamCreate);
