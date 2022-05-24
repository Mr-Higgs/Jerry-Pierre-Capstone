import React from 'react'

function VideoDescription({selectedVideo}) {
  return (
    <div>
      <h1 className="videodescription__title">
        {selectedVideo.title}
      </h1>
      <div className="videodescription__tab">
        <div className="videodescription__tab-container">
          <p className="videodescription__tab-container-channel">
            Chapter: {selectedVideo.chapter}
          </p>
        </div>
      </div>
      <p className="videodescription__description">
        {selectedVideo.content}
      </p>
    </div>
  )
}

export default VideoDescription