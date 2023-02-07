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
} from "react-konva";
import useImage from "use-image";
import { KonvaEventListener } from "konva/lib/Node";

function App() {
  const changeSize = (e: any) => {
    e.target.to({
      scaleX: Math.random() + 0.8,
      scaleY: Math.random() + 0.8,
      duration: 0.2,
    });
  };

  return (
    <Stage width={window.innerWidth - 20} height={window.innerHeight - 20}>
      <Layer>
        <Rect
          draggable
          onDragStart={changeSize}
          fill="green"
          width={100}
          height={100}
        />
      </Layer>
    </Stage>
  );
}

export default App;
