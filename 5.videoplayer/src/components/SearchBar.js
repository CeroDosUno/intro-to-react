import React from 'react';

class SearchBar extends React.Component{
  state = {searchtext: ''};

    onInputChange = (e) =>{
      this.setState({searchtext:e.target.value});
    };

    onFormSubmit = (e) =>{
      e.preventDefault();


      this.props.onFormSubmit(this.state.searchtext);
    };

  render(){
    return (
      <div className="search-bar ui segment">
        <form className="ui form"
        onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
            type="text"
            value={this.state.searchtext}
            onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
