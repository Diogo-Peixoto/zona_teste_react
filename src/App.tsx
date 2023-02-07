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

function App() {
  const [isDragging, setDragging] = useState(false);

  return (
    <Stage width={window.innerWidth - 20} height={window.innerHeight - 20}>
      <Layer>
        <Portal selector=".top-layer" enabled={isDragging}>
          <Rect
            x={20}
            y={50}
            width={150}
            height={150}
            fill="red"
            draggable
            onDragStart={() => {
              setDragging(true);
            }}
            onDragEnd={() => {
              setDragging(false);
            }}
          />
        </Portal>
        <Circle x={200} y={100} radius={50} fill="green" />
        <Line
          x={20}
          y={200}
          points={[0, 0, 100, 0, 100, 100]}
          tension={0.5}
          closed
          stroke="black"
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, "red", 1, "yellow"]}
          draggable
        />
      </Layer>
      <Layer name="top-layer" />
    </Stage>
  );
}

export default App;
