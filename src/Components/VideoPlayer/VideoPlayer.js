import React from 'react'
import "./VideoPlayer.scss"

function VideoPlayer({title, chapter, id, VideoFn}) {
  return (
    <div className="videoplayer" onClick={() => {VideoFn(id) }}>
      <div className="videoplayer__container">
        <h4 className="videoplayer__container-title">
          {title}
        </h4>
        <p className="videoplayer__container-channel">
          {chapter}
        </p>
      </div>
    </div>
  )
}

export default VideoPlayer