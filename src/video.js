import React from "react";

const Video = ({ idx }) => {
  return (
    <video id={idx} width="100%" height="100%" autoPlay loop muted>
      <source
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
