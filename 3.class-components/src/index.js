import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//class based component
class App extends React.Component{
  state = {lat:null,errorMessage:''};

componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    (position) => this.setState({lat: position.coords.latitude}),
    (err) => this.setState({errorMessage:err.message})
  );
}

componentDidUpdate(){
  console.log("did update");
}

componentWillUnmount(){
  console.log("will mount");
}

  render() {
    if(this.state.errorMessage && !this.state.lat){
      return (<div>
      Error:{this.state.errorMessage}
      </div>
    );
    } else if(this.state.lat&& !this.state.errorMessage){
      return (<div>
        <SeasonDisplay lat= {this.state.lat}/>
      </div>
    );
    }else{
    return <div> loading ... </div>;
    }


    // return <div>
    // Latitude: {this.state.lat} <br/>
    // Error:{this.state.errorMessage}
    // </div>;
  }
}


ReactDOM.render(
  <App/>,
document.querySelector('#root')
);

















//function component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//   //position returns if geolocation is obtained
//   //error is returned if not able to.
//
//     (position) => console.log(position),
//     err => console.log(err)
//   );
//
//   return <div> Latitude: </div>;
// };
