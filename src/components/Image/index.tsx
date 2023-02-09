import { useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";

interface IPropsRetangle {
  image: any;
  isSelect: boolean;
  onSelect: () => void;
  onChange: any;
}

const URLImage = ({ image, isSelect, onSelect, onChange }: IPropsRetangle) => {
  const [img] = useImage(image.src);
  const shapRef = useRef<any>(null);
  const trRef = useRef<any>(null);

  useEffect(() => {
    if (isSelect) {
      trRef.current.nodes([shapRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelect]);

  return (
    <>
      <Image
        image={img}
        x={image.x}
        y={image.y}
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
        onClick={onSelect}
        onTap={onSelect}
        onDragStart={onSelect}
        ref={shapRef}
        {...image}
        draggable
        onTransformEnd={() => {
          // enviar as informações para o Onchage
          const node = shapRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          console.log(node);

          node.scaleX(1);
          node.scaleY(1);

          onChange({
            ...image,
            x: node.x(),
            y: node.y(),

            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
            scaleX: scaleX,
            scaleY: scaleY,
          });
        }}
        onDragEnd={(e: any) => {
          // enviar as informações para o Onchage
          onChange({
            ...image,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
      />
      {isSelect && <Transformer ref={trRef} />}
    </>
  );
};

export default URLImage;
