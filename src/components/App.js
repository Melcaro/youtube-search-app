import React from 'react';
import YoutubeApi from 'simple-youtube-api';
import debounce from 'lodash.debounce';

import { AppTitle } from './AppTitle';
import { SearchBar } from './SearchBar';
import { VideoPlayer } from './VideoPlayer';
import { VideoList } from './VideoList';
import { auth } from './../auth';

const youtube = new YoutubeApi(auth.apiKey);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      videoId: null,
      searchBarInput: '',
    };
    this.debouncedSearch = debounce(this.searchVideo, 200);
  }

  async componentDidMount() {
    const videosResult = await youtube.searchVideos('Hulk', 3);
    this.setState({
      videos: videosResult,
    });
    console.log(videosResult);
  }

  startVideo = videoId => {
    console.log(videoId);
    this.setState({
      videoId: videoId,
    });
  };

  onInputChange({ target: { value } }) {
    this.setState({
      searchBarInput: value,
    });
    this.debouncedSearch(value);
  }

  searchVideo = async query => {
    const searchResults = await youtube.searchVideos(query, 10);
    this.setState({
      videos: searchResults,
    });
  };

  render() {
    const {
      state: { videos, videoId, searchBarInput },
    } = this;

    return (
      <div className="App">
        <AppTitle />
        <SearchBar
          value={searchBarInput}
          onChange={this.onInputChange.bind(this)}
        />
        <VideoPlayer videoId={videoId} />
        <VideoList videos={videos} onVideoChange={this.startVideo} />
      </div>
    );
  }
}

export default App;
