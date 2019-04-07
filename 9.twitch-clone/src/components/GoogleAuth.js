import React from 'react';

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

  onAuthChange = () =>{
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  };

  renderAuthButton(){
    if(this.state.isSignedIn === null){
      return <div> IDK if we signed in </div>;
    }
    else if(this.state.isSignedIn){
      return <div> signed in </div>;
    }
    else{
      return <div> not signed in </div>;
    }
  }

   render(){
     return (
       <div className="item">
        {this.renderAuthButton()}
       </div>
     );
   }
}

export default GoogleAuth;
