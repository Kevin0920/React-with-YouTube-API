import React, { Component } from "react";

class SearchBar extends Component {

  constructor(props) {
    super(props);


    this.state = { term: '' };
  }


  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
        // whenever the input change in the search bar, run the function here
    );
  }

  // make a functionality for search bar, when typing video will start searching the video has the keyward
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}



export default SearchBar;

// exporting search bar from here and import to index.js
