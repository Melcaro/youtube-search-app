import React from 'react';
import PropTypes from 'prop-types';

import { VideoItem } from './VideoItem';

const VideoList = ({ videos, onVideoChange }) => {
  return (
    <div>
      <div>
        {videos.map(video => (
          <VideoItem
            key={video.id}
            video={video}
            onVideoChange={onVideoChange}
          />
        ))}
      </div>
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.shape({
    id: PropTypes.number,
  }),
  onVideoChange: PropTypes.func.isRequired,
};

VideoList.defaultProps = {
  onVideoChange: () => null,
};

export { VideoList };
