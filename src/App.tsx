import Konva from "konva";
import { useRef, useState } from "react";
import { Layer, Rect, Stage, Transformer } from "react-konva";

interface IPosition {
  x1: undefined | number;
  y1: undefined | number;
  x2: undefined | number;
  y2: undefined | number;
}

function App() {
  const stage = useRef<Konva.Stage>(null);
  const tr = useRef<Konva.Transformer>(null);
  const rect1 = useRef<Konva.Rect>(null);
  const rect2 = useRef<Konva.Rect>(null);
  const selectionRectangle = useRef<Konva.Rect>(null);
  const [position, setPosition] = useState<IPosition>({
    x1: undefined,
    y1: undefined,
    x2: undefined,
    y2: undefined,
  });

  function fn1(e: any) {
    if (e.target !== stage.current) {
      return;
    }
    e.evt.preventDefault();

    setPosition({
      x1: stage.current?.getPointerPosition()?.x,
      y1: stage.current?.getPointerPosition()?.y,
      x2: stage.current?.getPointerPosition()?.x,
      y2: stage.current?.getPointerPosition()?.y,
    });

    selectionRectangle.current?.visible(true);
    selectionRectangle.current?.width(0);
    selectionRectangle.current?.height(0);
  }

  function fn2(e: any) {
    if (!selectionRectangle.current?.visible()) {
      return;
    }

    e.evt.preventDefault();
    setPosition({
      ...position,
      x2: stage.current?.getPointerPosition()?.x,
      y2: stage.current?.getPointerPosition()?.y,
    });

    selectionRectangle.current?.setAttrs({
      x: Math.min(position.x1!, position.x2!),
      y: Math.min(position.y1!, position.y2!),
      width: Math.abs(position.x2! - position.x1!),
      height: Math.abs(position.y2! - position.y1!),
    });
  }

  function fn3(e: any) {
    if (!selectionRectangle.current?.visible()) {
      return;
    }

    e.evt.preventDefault();

    setTimeout(() => {
      selectionRectangle.current?.visible(false);
    });

    const shapes = stage.current?.find(".rect");
    const box = selectionRectangle.current?.getClientRect();
    const selected = shapes?.filter((shape) =>
      Konva.Util.haveIntersection(box!, shape.getClientRect())
    );

    tr.current?.nodes(selected!);
  }

  function fn4(e: any) {
    if (selectionRectangle.current?.visible()) {
      return;
    }

    if (e.target === stage.current) {
      tr.current?.nodes([]);
      return;
    }

    if (!e.target.hasName("rect")) {
      return;
    }
  }

  return (
    <div className="App">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stage}
        onMouseDown={fn1}
        onTouchStart={fn1}
        onMouseMove={fn2}
        onTouchMove={fn2}
        onMouseUp={fn3}
        onTouchEnd={fn3}
        onClick={fn4}
        onTap={fn4}
      >
        <Layer>
          <Rect
            ref={rect1}
            x={60}
            y={60}
            width={100}
            height={90}
            fill="red"
            draggable
            name="rect"
            onDragEnd={() => {}}
          />
          <Rect
            ref={rect2}
            x={90}
            y={90}
            width={100}
            height={90}
            fill="green"
            draggable
            name="rect"
            onDragEnd={() => {}}
          />
          <Rect
            ref={selectionRectangle}
            fill="rgba(177, 122, 240, 0.329)"
            visible={false}
            stroke="rgba(142, 86, 206, 0.774)"
            strokeWidth={1}
          />
          <Transformer ref={tr} />
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
