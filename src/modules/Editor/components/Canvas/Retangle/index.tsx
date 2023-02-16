import { Rect } from "react-konva";

interface IRetangleProps {
  x: number;
  y: number;
  fill: string;
  height: number;
  width: number;
  id: string;
  draggable: boolean;
}

const Retangle = ({
  x,
  y,
  fill,
  height,
  width,
  id,
  draggable
}: IRetangleProps) => {
  return (
    <>
      <Rect
        x={x}
        y={y}
        fill={fill}
        height={height}
        width={width}
        id={id}
        draggable={draggable}
      />
    </>
  );
};

export default Retangle;
