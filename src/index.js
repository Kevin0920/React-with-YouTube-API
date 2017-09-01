import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAwc6TMv3WwQQbTxbFuPzwjZGKvbnMN3EE";



// create a new component. This component should produce
// some html


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
   };

    this.videoSearch('surfboard');
}


   videoSearch(term) {
     YTSearch({ key: API_KEY, term: term }, videos => {
        console.log(videos)
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
        console.log(this.state.videos)
      });
    }


  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
        <div>
          <SearchBar onSearchTermChange={videoSearch}/>

          <VideoDetail video={this.state.selectedVideo}/>

          <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
        </div>
      );
   }
}

// take this component's generated HTML and put it
// on the page(in the DOM)
// trying to render DOM page, we pass in an instance

ReactDOM.render(<App />, document.querySelector(".container"));
