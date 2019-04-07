import React from 'react';

class GoogleAuth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '581136876828-3fqm8hc0vusoc8ph5as5956vhqavt7hf.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

   render(){
     return (
       <div className="item">
       googleapi
       </div>
     );
   }
}

export default GoogleAuth;
