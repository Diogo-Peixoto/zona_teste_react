import { useEffect, useRef } from "react";

import { Rect, Transformer } from "react-konva";
import { IPropsOnchange } from "../../App";

interface IPropsRetangle {
  shapeProps: IPropsOnchange;
  isSelected: boolean;
  onSelect: () => void;
  onChange: any;
}

const Rectangle = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
}: IPropsRetangle) => {
  const shapeRef = useRef<any>(null); // React
  const trRef = useRef<any>(null); // Transform

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            // essas informções são enviadas para serem salvas
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        // Esta captando os quando o trasformer esta no fim
        onTransformEnd={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            // essas informções são enviadas para serem salvas
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
            rotation: node.rotation(),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default Rectangle;
