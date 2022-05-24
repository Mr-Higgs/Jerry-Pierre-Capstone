import React from 'react'
import "./VideoListing.scss"
import VideoPlayer from "../VideoPlayer/VideoPlayer"

function VideoListing({videos, VideoFn}) {
  return (
    <div>
      <div className="accordion" id="accordionPanelsStayOpenExample">

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button collapsed bg-success text-dark bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              <strong>1-</strong> Getting Started
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              {videos.map((lesson) => (
                <VideoPlayer 
                  key={lesson.id}
                  id={lesson.id}
                  section={lesson.section}
                  title={lesson.title}
                  chapter={lesson.chapter}
                  video={lesson.video}
                  VideoFn={VideoFn} />
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed bg-success text-dark bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            <strong>2-</strong> Fundamental Analysis  
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              {videos.map((lesson) => (
                <VideoPlayer 
                  key={lesson.id}
                  id={lesson.id}
                  section={lesson.section}
                  title={lesson.title}
                  chapter={lesson.chapter}
                  video={lesson.video}
                  VideoFn={VideoFn} />
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed bg-success text-dark bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            <strong>3-</strong>Technical Analysis
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              {videos.map((lesson) => (
                <VideoPlayer 
                  key={lesson.id}
                  id={lesson.id}
                  section={lesson.section}
                  title={lesson.title}
                  chapter={lesson.chapter}
                  video={lesson.video}
                  VideoFn={VideoFn} />
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button className="accordion-button collapsed bg-success text-dark bg-opacity-10" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            <strong>4-</strong> Risk Management
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div className="accordion-body">
              {videos.map((lesson) => (
                <VideoPlayer 
                  key={lesson.id}
                  id={lesson.id}
                  section={lesson.section}
                  title={lesson.title}
                  chapter={lesson.chapter}
                  video={lesson.video}
                  VideoFn={VideoFn} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default VideoListing