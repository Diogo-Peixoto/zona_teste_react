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

interface Istep {
  x: number;
  y: number;
}

interface IHistory {
  currentStep: number;
  step: Array<Istep>;
}

let history = [
  {
    x: 20,
    y: 20,
  },
];

let historyStep = 0;

function App() {
  const [position, setposition] = useState(history[0]);

  function handleUndo() {
    if (historyStep === 0) {
      return;
    }

    historyStep -= 1;

    const previous = history[historyStep];

    setposition(previous);
  }

  function handleRedo() {
    if (historyStep === history.length - 1) {
      return;
    }

    historyStep += 1;

    const next = history[historyStep];

    setposition(next);
  }

  function handleDragEnd(e: any) {
    history = history.slice(0, historyStep + 1);

    const pos = {
      x: e.target.x(),
      y: e.target.y(),
    };

    history = [...history, pos];
    historyStep += 1;
    console.log(history);
    setposition(pos);
  }

  return (
    <Stage width={window.innerWidth - 20} height={window.innerHeight - 20}>
      <Layer>
        <Text text="undo" onClick={handleUndo} />
        <Text text="redo" x={40} onClick={handleRedo} />
        <Rect
          x={position.x}
          y={position.y}
          width={50}
          height={50}
          fill="black"
          draggable
          onDragEnd={handleDragEnd}
        />
      </Layer>
    </Stage>
  );
}

export default App;
