import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // calling the video form video list as {video}, so will have access to it
  console.log(video);
  // print all the video info from Youtube

  const imageUrl = video.snippet.thumbnails.default.url;

  // whenever the user click on the <li> tag, here become a specific video
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
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
