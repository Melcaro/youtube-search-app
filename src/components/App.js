import React from 'react';
import { AppTitle } from './AppTitle';
import { SearchBar } from './SearchBar';
import { VideoPlayer } from './VideoPlayer';
import { VideoList } from './VideoList';

function App() {
  return (
    <div className="App">
      <AppTitle />
      <SearchBar />
      <VideoPlayer />
      <VideoList />
    </div>
  );
}

export default App;
