import { MainContainer } from "./style";
import { Layer, Stage } from "react-konva";
const SceneKonva = () => {
  return (
    <MainContainer>
      <Stage width={596} height={842}>
        <Layer></Layer>
      </Stage>
    </MainContainer>
  );
};

export default SceneKonva;
