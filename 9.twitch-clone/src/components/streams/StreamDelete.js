import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream, deleteStream} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class StreamDelete extends React.Component{



  renderActionds(){
    const {id } = this.props.match.params;

    return(
      <React.Fragment>
        <button
        onClick={() => {this.props.deleteStream(id)}}
        className ="ui button negative">
        Delete
        </button>
        <Link to= "/"
        className = "ui button">Cancel
        </Link>
        </React.Fragment>
      );
  }

  componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
  }

  renderContent(){
    return !this.props.stream?
      "Are you sure you want to delete this stream?":
    `Are you sure you want to delete this stream with title:
    ${this.props.stream.title}?`;
  }

  render(){
      return (
          <Modal
          title= "Delete Stream"
          content = {this.renderContent()}
          actions ={this.renderActionds()}
          onDismiss={() => history.push('/')}
          />
        );
  }
}

const mapStateToProps = (state,ownProps) =>{
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete);
