import React from 'react'
import video from "../Assests/video.mp4"

function Video() {
  return (
    <div>
      <video src={video.mp4} autoPlay loop muted />
    </div>
  )
}

export default Video
