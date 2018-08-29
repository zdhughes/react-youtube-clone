import React from 'react';

// Using the curly braces in a manner similar to below creates
// a new variable from the prop called video
const VideoListItem = ({video, handleVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => handleVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
