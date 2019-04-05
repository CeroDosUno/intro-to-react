import React from 'react';
//add connect to see song selected
import {connect} from 'react-redux';

class SongList extends React.Component{
  renderList(){
    return this.props.songs.map((song) =>{
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">
            Select
            </button>
          </div>

          <div className="content">
          {song.title}
          </div>

        </div>


      );
    });
  }


  render(){
    console.log(this.props.songs);

    return(
      <div> {this.renderList()} </div>
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
