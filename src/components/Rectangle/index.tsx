import { useEffect, useRef } from "react";

import { Rect, Transformer } from "react-konva";

interface IPropsRetangle {
  shapeProps: any;
  isSelected: boolean;
  onSelect: () => void;
  onDragEnd: () => void;
}

const Rectangle = ({
  shapeProps,
  isSelected,
  onSelect,
  onDragEnd,
}: IPropsRetangle) => {
  const shapeRef = useRef(null); // React
  const trRef = useRef<any>(null); // Transform

  useEffect(() => {
    if (isSelected) {
      trRef.current?.nodes([shapeRef.current]);
      trRef.current?.getLayer()?.batchDraw();
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
      />

      <Transformer ref={trRef} />
    </>
  );
};

export default Rectangle;
