import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component{
  state = { isSignedIn: null};

  //initialize google authentication session
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '581136876828-3fqm8hc0vusoc8ph5as5956vhqavt7hf.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {

          this.auth = window.gapi.auth2.getAuthInstance();

          this.setState({isSignedIn: this.auth.isSignedIn.get() })
          //callback that will be invoked with auth status i changed
          //user signs in our signs out
          this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) =>{
    if(isSignedIn){
      this.props.signIn();
    }
    else{
      this.props.signOut();
    }
  };

  renderAuthButton(){
    if(this.state.isSignedIn === null){
      return (
        <button
        className="ui red google button">
          <i className="google icon"/>
          Loading ...
        </button>
      );    }
    else if(this.state.isSignedIn){
      return (
        <button
        onClick={this.onSignOutClick}
        className="ui red google button">
          <i className="google icon"/>
          Sign Out
        </button>
      );
    }
    else{
      return (
        <button
        onClick={this.onSignInClick}
        className="ui red google button">
          <i className="google icon"/>
          Sign In
        </button>
      );
    }
  }

  onSignInClick = () =>{
    this.auth.signIn();
  }

  onSignOutClick = () =>{
    this.auth.signOut();
  }

   render(){
     return (
       <div className="item">
        {this.renderAuthButton()}
       </div>
     );
   }
}



export default connect(null, {signIn,signOut})(GoogleAuth);
