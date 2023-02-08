import { useRef, useState } from "react";

import { Stage, Layer } from "react-konva";
import URLImage from "./components/Image";

function App() {
  const [images, setImages] = useState([]);
  const dragURL = useRef();
  const stageRef = useRef<any>();

  return (
    <>
      <img
        alt="lion"
        src={"https://konvajs.org/assets/lion.png"}
        draggable
        onDragStart={(e: any) => {
          dragURL.current = e.target.src;
        }}
      />
      <div
        onDrop={(e) => {
          e.preventDefault();
          stageRef.current.setPointersPositions(e);

          setImages(
            images.concat({
              ...stageRef.current.getPointerPosition(),
              src: dragURL.current,
            })
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: "1px solid grey" }}
          ref={stageRef}
        >
          <Layer>
            {images.map((image: any) => (
              <URLImage image={image} />
            ))}
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default App;
