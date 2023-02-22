import { Text, Transformer } from "react-konva";
import { useEffect, useRef } from "react";
import { useMain } from "../../../hooks";

interface IRetangleProps {
  x: number;
  y: number;
  id: string;
  draggable: boolean;
  height: number;
  width: number;
  text: string;
  fontSize: number;
  onChange: (newAttrs: any) => void;
  item: any;
}

const TextElement = ({
  x,
  y,
  id,
  draggable,
  height,
  width,
  text,
  fontSize,
  onChange,
  item
}: IRetangleProps) => {
  const { selectObject, setSelectObject } = useMain();
  const trRef = useRef<any>(null);
  const shapRef = useRef<any>(null);

  useEffect(() => {
    trRef.current?.setNodes([shapRef.current!]);
    trRef.current?.setZIndex(trRef.current.getParent().children!.length - 1);
    trRef.current?.getLayer()?.batchDraw();
  }, [selectObject]);

  return (
    <>
      <Text
        height={height}
        width={width}
        x={x}
        y={y}
        id={id}
        text={text}
        draggable={draggable}
        fontSize={fontSize}
        ref={shapRef}
        onClick={() => setSelectObject(id)}
        onTransformEnd={() => {
          const node = shapRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);

          onChange({
            ...item,
            x: node.x(),
            y: node.y(),

            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
            scaleX: scaleX,
            scaleY: scaleY
          });
        }}
        onDragEnd={(e: any) => {
          onChange({
            ...item,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
      />
      {selectObject === id && <Transformer ref={trRef} />}
    </>
  );
};

export default TextElement;
