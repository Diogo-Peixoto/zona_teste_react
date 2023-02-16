import { MainContainer } from "./style";
import { Layer, Stage } from "react-konva";
import { useMain } from "../../hooks";
import TypeElement from "../TypeElement";
const SceneKonva = () => {
  const { stageRef, dataPages } = useMain();

  return (
    <MainContainer>
      <Stage ref={stageRef} width={596} height={842}>
        <Layer>
          {dataPages.map((item: any, index: number) => (
            <TypeElement item={item} key={index} />
          ))}
        </Layer>
      </Stage>
    </MainContainer>
  );
};

export default SceneKonva;
