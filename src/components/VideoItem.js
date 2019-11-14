import React from 'react';
import P from 'prop-types';

const VideoItem = ({
  video: {
    id,
    title,
    description,
    thumbnails: {
      high: { url },
    },
  },
  onVideoChange,
}) => {
  return (
    <div onClick={() => onVideoChange(id)}>
      <img src={url} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

VideoItem.propTypes = {
  video: P.shape({
    id: P.number,
    title: P.string,
    description: P.string,
  }),
  onVideoChange: P.func.isRequired,
};

VideoItem.defaultProps={
    onVideoChange:()=>null,
}

export { VideoItem };
