import { Circle, Line, Rect, Star, Text } from "react-konva";
import CircleElement from "../Canvas/Circle";
import Retangle from "../Canvas/Retangle";

interface ITypeElementProps {
  item: {
    object: string;
    x: number;
    y: number;
    fill?: string;
    height?: number;
    width?: number;
    id: string;
    draggable: boolean;
    stroke?: string;
    points: [];
    fontSize?: number;
  };
}

const TypeElement = ({ item }: ITypeElementProps) => {
  let RenderObject = null;

  switch (item.object) {
    case "rectangle":
      RenderObject = (
        <Retangle
          x={item.x}
          y={item.y}
          fill={item.fill!}
          height={item.height!}
          width={item.width!}
          id={item.id}
          draggable={item.draggable}
        />
      );
      break;
    case "circle":
      RenderObject = (
        <CircleElement
          x={item.x}
          y={item.y}
          fill={item.fill!}
          height={item.height!}
          width={item.width!}
          id={item.id}
          draggable={item.draggable}
        />
      );
      break;
    case "star":
      RenderObject = (
        <Star
          x={item.x}
          y={item.y}
          fill={item.fill}
          id={item.id}
          numPoints={5}
          innerRadius={20}
          outerRadius={40}
          scaleX={1.5}
          scaleY={1.5}
          draggable={item.draggable}
        />
      );
      break;
    case "triangle":
      RenderObject = (
        <Star
          x={item.x}
          y={item.y}
          fill={item.fill}
          id={item.id}
          numPoints={3}
          innerRadius={20}
          outerRadius={40}
          scaleX={1.5}
          scaleY={1.5}
          draggable={item.draggable}
        />
      );
      break;
    case "square":
      RenderObject = (
        <Rect
          x={item.x}
          y={item.y}
          fill={item.fill}
          height={item.height}
          width={item.width}
          id={item.id}
          draggable={item.draggable}
        />
      );
      break;
    case "line":
      RenderObject = (
        <Line
          x={item.x}
          y={item.y}
          stroke={item.stroke}
          id={item.id}
          points={item.points}
          draggable={item.draggable}
        />
      );
      break;
    case "text":
      RenderObject = (
        <Text
          height={item.height}
          width={item.width}
          x={item.x}
          y={item.y}
          id={item.id}
          text="Texto Padrão"
          draggable={item.draggable}
          fontSize={item.fontSize}
        />
      );
      break;
  }

  return <>{RenderObject}</>;
};

export default TypeElement;
