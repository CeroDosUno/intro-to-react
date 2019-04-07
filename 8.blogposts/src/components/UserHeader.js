import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser} from '../actions';

class UserHeader extends React.Component{
  // componentDidMount(){
  //   this.props.fetchUser(this.props.userId);
  // }


  render(){
    //finduser in array of users
    const {user} = this.props;

    if(!user){
      return null;
    }

    return(
      <div className = "header">
      {user.name}
      </div>
    );
  }
}

//this gets a reference to props via ownProps
const mapStateToProps = (state,ownProps) =>{
  return {user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps)(UserHeader);
