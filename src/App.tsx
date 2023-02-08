import React, {
  Component,
  DragEventHandler,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
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
  KonvaNodeComponent,
  KonvaNodeEvents,
} from "react-konva";
import useImage from "use-image";
import { Portal } from "react-konva-utils";
import { utimes } from "fs";
import { KonvaEventObject } from "konva/lib/Node";

function generateItems() {
  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      id: "node-" + i,
      color: Konva.Util.getRandomColor(),
    });
  }
  return items;
}

function App() {
  const [items, setItems] = useState<Array<any>>(generateItems());

  function handleDragStart(e: any) {
    const id = e.target.name();
    const itemSlice = items.slice();
    const item = items.find((i) => i.id === id);
    const index = items.indexOf(item);

    itemSlice.splice(index, 1);

    itemSlice.push(item);

    setItems(itemSlice);
  }

  function handleDragEnd(e: any) {
    const id = e.target.name();
    const itemSlice = items.slice();
    const item = items.find((i) => i.id === id);
    const index = items.indexOf(item);

    itemSlice[index] = {
      ...item,
      x: e.target.x(),
      y: e.target.y(),
    };

    setItems(itemSlice);
  }

  return (
    <Stage width={window.innerWidth - 20} height={window.innerHeight - 20}>
      <Layer>
        {items.map((item) => {
          return (
            <Circle
              key={item.id}
              name={item.id}
              draggable
              x={item.x}
              y={item.y}
              fill={item.color}
              radius={50}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}

export default App;
