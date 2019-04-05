import React from 'react';
//add connect to see song selected
import {connect} from 'react-redux';
import {selectSong} from '../actions';


class SongList extends React.Component{
  renderList(){
    return this.props.songs.map((song) =>{
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary"
            onClick={() => this.props.selectSong(song)}
            >
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
    // console.log(this.props);
    return(
      <div className ="ui divided list">
      {this.renderList()}
      </div>
    );
  };
}

//take out state object in reduce store,
//state = all songs in store because there exists a value called songs
//and have that show up as props to SongList
const mapStateToProps = (state) =>{
  // console.log(state);
  return {songs:state.songs};
};



//What is this syntax?
/*
connect()()
first parenthesis returns the function while the second parenthesis
invokes the function
*/
// Note that the action selectSong is not the same.
// the connect function turns the selectSong
// into store.dispatch(selectSong(song));

export default connect(mapStateToProps, {
  selectSong
})(SongList);




//
