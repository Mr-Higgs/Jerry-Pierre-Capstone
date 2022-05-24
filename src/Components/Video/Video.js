import React from 'react'
import "./Video.scss";


function Video({selectedVideo}) {
  
  return (
    <main className="video">
      <div className="video__container">
        <iframe 
          width="727" 
          height="409" 
          scr={selectedVideo.video} // should this be on the back as a url in json data file?
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div> 
      
    </main>
  );
}
 
export default Video;