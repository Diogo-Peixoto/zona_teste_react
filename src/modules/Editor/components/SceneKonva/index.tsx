import { MainContainer } from "./style";
import { Layer, Rect, Stage, Transformer } from "react-konva";
import { useMain } from "../../hooks";
import TypeElement from "../TypeElement";
import { useGroup } from "../../hooks/useGroup";

const SceneKonva = () => {
  const { stageRef, dataPages} = useMain();
  const {
    selectionGroup,
    trRef,
    startPosition,
    positionMouve,
    endPosition,
    notSelectGroup
  } = useGroup();

  return (
    <MainContainer>
      <Stage
        ref={stageRef}
        width={596}
        height={842}
        onMouseDown={startPosition}
        onTouchStart={startPosition}
        onMouseMove={positionMouve}
        onTouchMove={positionMouve}
        onMouseUp={endPosition}
        onTouchEnd={endPosition}
        onClick={notSelectGroup}
        onTap={notSelectGroup}
      >
        <Layer>
          {dataPages.map((item: any, index: number) => (
            <TypeElement item={item} key={index} />
          ))}

          <Rect
            ref={selectionGroup}
            fill="rgba(177, 122, 240, 0.329)"
            visible={false}
            stroke="rgba(142, 86, 206, 0.774)"
            strokeWidth={1}
          />

          <Transformer ref={trRef} />
        </Layer>
      </Stage>
    </MainContainer>
  );
};

export default SceneKonva;
