import HeaderPageCanva from "../HeaderPageCanvas";
import SceneKonva from "../SceneKonva";
import { MainContainer } from "./style";

const CanvasContainer = () => {
  return (
    <MainContainer>
      <HeaderPageCanva />
      <SceneKonva />
    </MainContainer>
  );
};

export default CanvasContainer;
