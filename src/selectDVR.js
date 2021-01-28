import React, { useState } from "react";

function SelectDVR() {
  const [selectedDVR, setSelectedDVR] = useState("dvr1");
  return (
    <div>
      <div
        className={selectedDVR === "dvr1" ? "dvr-click" : "dvr"}
        onClick={() => {
          setSelectedDVR("dvr1");
        }}
      >
        DVR 1
      </div>
      <div
        className={selectedDVR === "dvr2" ? "dvr-click" : "dvr"}
        onClick={() => {
          setSelectedDVR("dvr2");
        }}
      >
        DVR 2
      </div>
      <div
        className={selectedDVR === "dvr3" ? "dvr-click" : "dvr"}
        onClick={() => {
          setSelectedDVR("dvr3");
        }}
      >
        DVR 3
      </div>
      <div
        className={selectedDVR === "dvr4" ? "dvr-click" : "dvr"}
        onClick={() => {
          setSelectedDVR("dvr4");
        }}
      >
        DVR 4
      </div>
      <div
        className={selectedDVR === "dvr5" ? "dvr-click" : "dvr"}
        onClick={() => {
          setSelectedDVR("dvr5");
        }}
      >
        DVR 5
      </div>
      <div
        className={selectedDVR === "dvr6" ? "dvr-click" : "dvr"}
        onClick={() => {
          setSelectedDVR("dvr6");
        }}
      >
        DVR 6
      </div>
      <div
        className={selectedDVR === "dvr7" ? "dvr-click" : "dvr"}
        onClick={() => {
          setSelectedDVR("dvr7");
        }}
      >
        DVR 7
      </div>
      <div
        className={selectedDVR === "dvr8" ? "dvr-click" : "dvr"}
        onClick={() => {
          setSelectedDVR("dvr8");
        }}
      >
        DVR 8
      </div>
    </div>
  );
}

export default SelectDVR;
