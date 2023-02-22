import { MainContainer } from "./style";
import { Layer, Stage } from "react-konva";
import { useMain } from "../../hooks";
import TypeElement from "../TypeElement";
const SceneKonva = () => {
  const { stageRef, dataPages, setSelectObject } = useMain();
  const deselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectObject("");
    }
  };

  return (
    <MainContainer>
      <Stage
        ref={stageRef}
        width={596}
        height={842}
        onMouseDown={deselect}
        onTouchStart={deselect}
      >
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
