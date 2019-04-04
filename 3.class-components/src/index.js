import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//class based component
class App extends React.Component{
  state = {lat:null,errorMessage:''};

  componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    (position) => this.setState({lat: position.coords.latitude}),
    (err) => this.setState({errorMessage:err.message})
  );
}

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return (
        <div>
        <Spinner message= {this.state.errorMessage}/>
        </div>
    );
    } else if(this.state.lat&& !this.state.errorMessage){
      return (<div>
        <SeasonDisplay lat= {this.state.lat}/>
      </div>
    );
    }else{
    return <div> <Spinner message="Please accept location request." /></div>;
    }
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
        </div>
      );
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
