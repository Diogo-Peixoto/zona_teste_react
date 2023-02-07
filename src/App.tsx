import React, { Component, useEffect, useRef, useState } from "react";
import Konva from "konva";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Image } from "react-konva";
import useImage from "use-image";

function App() {
  const [image] = useImage("https://konvajs.org/assets/lion.png", "anonymous");
  const imageRef = useRef<any>(null);

  const [color, setColor] = useState({ color: "green" });

  function handleClick() {
    setColor({ color: Konva.Util.getRandomColor() });
    if (image) {
      imageRef.current.cache();
    }
  }

  useEffect(() => {
    if (image) {
      imageRef.current.cache();
    }
  }, [image]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image
          ref={imageRef}
          image={image}
          filters={[Konva.Filters.Noise]}
          blurRadius={10}
          x={10}
          y={10}
          fill={color.color}
          onClick={() => handleClick()}
        />
      </Layer>
    </Stage>
  );
}

export default App;
