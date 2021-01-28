import React from "react";
import Video from "./video";

const VideoGrid = () => {
  return (
    <div>
      <div className="parent">
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div1"
          onClick={() => {
            var elem = document.getElementById("vid1");
            elem.requestFullscreen();
          }}
        >
          <Video idx="vid1" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div2"
          onClick={() => {
            var elem = document.getElementById("vid2");
            elem.requestFullscreen();
          }}
        >
          <Video idx="vid2" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div3"
          onClick={() => {
            var elem = document.getElementById("vid3");
            elem.requestFullscreen();
          }}
        >
          <Video idx="vid3" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div4"
          onClick={() => {
            var elem = document.getElementById("vid4");
            elem.requestFullscreen();
          }}
        >
          <Video idx="vid4" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div5"
        >
          <Video idx="vid5" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div6"
        >
          <Video idx="vid6" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div7"
        >
          <Video idx="vid7" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div8"
        >
          <Video idx="vid8" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div9"
        >
          <Video idx="vid9" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div10"
        >
          <Video idx="vid10" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div11"
        >
          <Video idx="vid11" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div12"
        >
          <Video idx="vid12" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div13"
        >
          <Video idx="vid13" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div14"
        >
          <Video idx="vid14" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div15"
        >
          <Video idx="vid15" />
        </div>
        <div
          style={{ height: "170px", width: "200px", cursor: "pointer" }}
          className="div16"
        >
          <Video idx="vid16" />
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
