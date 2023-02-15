import { useEffect, useRef, useState } from "react";

import { Stage, Layer } from "react-konva";
import URLImage from "./components/Image";

import "./styles/style.css";

function App() {
  const [images, setImages] = useState<any>([]);
  const [selectedId, setSectShape] = useState(null);
  const dragURL = useRef();
  const stageRef = useRef<any>();

  //Armazenamento localStorage
  useEffect(() => {
    if (images[0]) {
      window.localStorage.setItem("data", JSON.stringify(images));
    }
  }, [images]);

  useEffect(() => {
    const data: any = window.localStorage.getItem("data");
    setImages(JSON.parse(data));
  }, []);

  return (
    <div className="container">
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
              id: images.length,
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
            {images.map((image: any, index: number) => (
              <URLImage
                image={image}
                isSelect={image.id === selectedId}
                onSelect={() => {
                  setSectShape(image.id);
                }}
                key={index}
                onChange={(newAttrs: any) => {
                  const previusArray: Array<any> = images.slice();
                  const item = previusArray.find(
                    (item) => item.id === newAttrs.id
                  );
                  const index = previusArray.lastIndexOf(item);
                  previusArray[index] = newAttrs;
                  setImages(previusArray);
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default App;
