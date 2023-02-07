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
import { Html } from "react-konva-utils";

function App() {
  return (
    <Stage width={window.innerWidth - 20} height={window.innerHeight - 20}>
      <Layer>
        <Html
          divProps={{
            style: {
              position: "absolute",
              top: 10,
              left: 10,
            },
          }}
        >
          <input placeholder="Estou dentro do canvas" />
        </Html>
        <Rect x={20} y={20} width={50} height={50} fill="red" shadowBlur={5} />
      </Layer>
    </Stage>
  );
}

export default App;
