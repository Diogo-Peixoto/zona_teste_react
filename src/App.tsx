import React, { Component, Fragment, useEffect, useRef, useState } from "react";
import Konva from "konva";
import { createRoot } from "react-dom/client";
import {
  Stage,
  Layer,
  Rect,
  Image,
  Text,
  Circle,
  Transformer,
  Group,
  Line,
} from "react-konva";
import useImage from "use-image";
import { Portal } from "react-konva-utils";

function downloadURI(uri: string, name: string) {
  let link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function App() {
  const stageRef = useRef<any>(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, "stage.pdf");
  };

  return (
    <>
      <button onClick={handleExport}>Click here to log stage data URL</button>
      <Stage ref={stageRef} width={width - 20} height={height - 20}>
        <Layer>
          <Rect x={0} y={0} width={80} height={80} fill="red" />
          <Rect x={width - 80} y={0} width={80} height={80} fill="red" />
          <Rect
            x={width - 80}
            y={height - 80}
            width={80}
            height={80}
            fill="red"
          />
          <Rect x={0} y={height - 80} width={80} height={80} fill="red" />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
