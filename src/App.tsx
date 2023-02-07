import React, { Component, useEffect, useRef, useState } from "react";
import Konva from "konva";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Image, Text } from "react-konva";
import useImage from "use-image";

function App() {
  const [element, setElement] = useState({
    isDragging: false,
    x: 50,
    y: 50,
  });
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          text="Is Dragglabe Text"
          draggable
          x={element.x}
          y={element.y}
          fill={element.isDragging ? "red" : "green"}
          onDragStart={() => {
            setElement({ ...element, isDragging: true });
          }}
          onDragEnd={(e) => {
            setElement({
              isDragging: false,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
        />
      </Layer>
    </Stage>
  );
}

export default App;
