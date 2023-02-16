import { MainContainer } from "./style";
import { Layer, Rect, Stage } from "react-konva";
import { useMain } from "../../hooks";
const SceneKonva = () => {
  const { stageRef, dataPages } = useMain();

  return (
    <MainContainer>
      <Stage ref={stageRef} width={596} height={842}>
        <Layer>
          {dataPages.map((item: any, index: number) => {
            return (
              <Rect
                draggable
                fill={item.fill}
                height={item.heigth}
                width={item.width}
                id={item.id}
                x={item.x}
                y={item.y}
                key={index}
              />
            );
          })}
        </Layer>
      </Stage>
    </MainContainer>
  );
};

export default SceneKonva;
