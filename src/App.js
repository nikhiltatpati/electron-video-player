import React, { Component } from "react";
import "./App.css";
import SelectDVR from "./selectDVR";
import VideoGrid from "./videoGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            margin: "20px",
            background: "orange",
            padding: "3px",
            borderRadius: "20px",
          }}
        >
          <h2>AISS Video Player</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px", height: "91vh", width: "40vw" }}>
            <SelectDVR />
          </div>
          <VideoGrid />
        </div>
      </div>
    );
  }
}

export default App;
