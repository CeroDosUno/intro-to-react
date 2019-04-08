import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {createStream} from '../../actions';
import {connect} from 'react-redux';

class StreamCreate extends React.Component{
  renderError ({error,touched}){
    if(touched && error){
      return (
        <div className = "ui error message">
          <div className = "header">
            {error}
          </div>
        </div>
      );
    }
  }


  //passes in formProps. we took out input
  //meta and label from formProps
  renderInput = ({input, label, meta}) =>{
    const className =  `field ${meta.error && meta.touched ?'error': ''}`
    return (
      <div className={className}>
      <label> {label} </label>
      <input
        {...input}
        autoComplete="off"
      />
      {this.renderError(meta)}
      </div>
    );
  }

  //onsubmit is handled by redux form
  //no need for event to prevent default.
  //
  onSubmit = (formValues) => {
    // console.log(formValues);
    //handles preventdefault()
    this.props.createStream(formValues);
  }


  render(){

      return (

        <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error">
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
const formWrapped = reduxForm({
  form:'simple',
  validate
})(StreamCreate);


export default connect(null, {
  createStream
})(formWrapped);
