import React from 'react';
//add connect to see song selected
import {connect} from 'react-redux';

class SongList extends React.Component{
  render(){
    // console.log(this.props);

    return(
      <div> asd </div>
    );
  };
}

//take out state object in reduce store,
//state = all songs in store because there exists a value called songs
//and have that show up as props to SongList
const mapStateToProps = (state) =>{
  return {
    songs:state.songs
  };
};



//What is this syntax?
/*
connect()()
first parenthesis returns the function while the second parenthesis
invokes the function
*/
export default connect(mapStateToProps)(SongList);
