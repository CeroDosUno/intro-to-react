import React from'react';
import axios from 'axios';

class ResourceList extends React.Component{
  state = {resources:[]};


//called when component is rendered
  async componentDidMount(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    this.setState({resources: response.data});
  }

//called when state changes
  async componentDidUpdate(prevProps){
    if(prevProps.resource !== this.props.resource){
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      this.setState({resources: response.data});
    }

  }

  render() {
    return (
      <div>
      In Resource <br/>
      {this.state.resources.length}
      </div>
    );
  }
}

export default ResourceList;
