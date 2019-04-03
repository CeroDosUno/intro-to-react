import React from 'react';
import ReactDOM from 'react-dom';

//class based component
class App extends React.Component{
//initialize an object with keyvalue pairs of
//data that will be used
//ex. latitude
  constructor(props){
    super(props);
    //ONLY ACCEPTABLE TIME
    this.state={lat:null};

    window.navigator.geolocation.getCurrentPosition(
    //position returns if geolocation is obtained
    //error is returned if not able to.
      (position) => {
        this.setState({lat: position.coords.latitude});
      },
      err => console.log(err)
    );
  }

  render() {
    return <div> Latitude: {this.state.lat} </div>;
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
