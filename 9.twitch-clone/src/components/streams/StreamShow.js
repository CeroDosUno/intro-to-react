import React from 'react';
import {fetchStream, deleteStream} from '../../actions';
import {connect} from 'react-redux';

class StreamShow extends React.Component{

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }


  render(){
    if(!this.props.stream){
      return (
        <div>
          Loading...
        </div>
      );
    }
    else{
    const {title, description} = this.props.stream;

    return (
        <div>
          <h1>{title}</h1>
          <h3>{description}</h3>

        </div>
      );
    }
  }
}

const mapStateToProps = (state,ownProps) =>{
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};

export default connect(mapStateToProps,{
  fetchStream})(StreamShow);
