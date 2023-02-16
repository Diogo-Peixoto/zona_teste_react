import { Circle } from "react-konva";

interface ICircleProps {
  x: number;
  y: number;
  fill: string;
  height: number;
  width: number;
  id: string;
  draggable: boolean;
}

const CircleElement = ({
  x,
  y,
  fill,
  height,
  width,
  id,
  draggable
}: ICircleProps) => {
  return (
    <>
      <Circle
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

export default CircleElement;
