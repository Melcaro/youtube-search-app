import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ videoId }) => {
  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${videoId}`} />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.number,
};

export { VideoPlayer };
