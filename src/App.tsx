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
import Rectangle from "./components/Rectangle";

export interface IPropsOnchange {
  fill: string;
  height: number;
  rotation: number;
  id: string;
  width: number;
  x: number;
  y: number;
}

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    rotation: 0,
    fill: "red",
    id: "rect1",
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    rotation: 0,
    fill: "green",
    id: "rect2",
  },
];

function App() {
  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState(null);
  console.log(rectangles);
  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {rectangles.map((rect: any, index) => {
          return (
            <Rectangle
              key={index}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              //Responsavel por trocar as novas informações pelas antigas
              // Recebe os valores da onchange vinda do <Rectangle>
              onChange={(newAttrs: IPropsOnchange) => {
                const rects = rectangles.slice();
                rects[index] = newAttrs;
                setRectangles(rects);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}

export default App;
