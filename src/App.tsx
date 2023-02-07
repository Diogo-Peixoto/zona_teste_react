import React, { Component, useEffect, useRef, useState } from "react";
import Konva from "konva";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Image, Text, Circle } from "react-konva";
import useImage from "use-image";

const pulseShape = (shape: Konva.Circle | null) => {
  shape?.to({
    scaleX: 1.5,
    scaleY: 1.5,
    onFinish: () => {
      shape.to({
        scaleX: 0.5,
        scaleY: 0.5,
      });
    },
  });
};

function App() {
  const circleRef = useRef<Konva.Circle | null>(null);

  const handleStageClick = () => {
    const shape = circleRef.current;
    pulseShape(shape);
  };

  return (
    <Stage
      onClick={handleStageClick}
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer>
        <Text text="Não Click na Tela!" />
        <Circle
          ref={circleRef}
          x={window.innerWidth / 2}
          y={window.innerHeight / 2}
          radius={80}
          fill="red"
        />
      </Layer>
    </Stage>
  );
}

export default App;
